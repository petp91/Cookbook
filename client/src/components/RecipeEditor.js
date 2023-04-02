import React, { useState } from 'react';
import { Button, Form, Row, Col, CloseButton } from 'react-bootstrap';
import { Typeahead, TypeaheadMenu } from 'react-bootstrap-typeahead';
import FormGroup from './FormGroup';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import AddRecipeConfirmDialog from "./AddRecipeConfirmDialog";

const units = ['test', 'test2'];
const newIngredientRowObj = () => {
    return {
        key: crypto.randomUUID(),
        selected: [''],
        amount: '0',
        units: units[0]
    }
};

const RecipeEditor = ({ ingredients, recipe, show, onHide }) => {

    const [ serverReply, setServerReply] = useState({
        state: "pending",
    })

    const [ showAddRecipeConfirmDialog, setShowAddRecipeConfirmDialog] = useState(false)

    function refreshPage() {  // todo ? JM refresh page to get new recipe and clear add form
        window.location.reload();
    }

    const [formState, setFormState] = useState({
        name: '',
        description: '',
        preparationLength: '',
        finalAmount: '',
        ingredientRows: [ newIngredientRowObj() ]
    });

    const addIngredient = () => {
        formState.ingredientRows.push(newIngredientRowObj());
        setFormState({...formState});
    };

    const onSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:8080/api/recipes',
        {
            name: formState.name,
                description: formState.description,
            imageId: "",
            preparationLength: parseInt(formState.preparationLength),
            finalAmount: parseInt(formState.finalAmount),
            ingredients: [
            {
                id: "",
                amount: 10,
                units: "g"
            }
        ]
        })
            .then((response)=> {
                setServerReply({ state: "success"});
                console.log('success');
            })
            .catch(function (error) {
                setServerReply({ state: "error"});
                console.log('error');
            });
    };

  //  console.clear();
    console.log(JSON.stringify(formState, null, 4));

    return (

        <Modal
               size="xl"
               show={show}
               onHide={onHide}
               backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Add new recipe
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <FormGroup
                        label='Recipe name'
                        type='text'
                        placeholder='Recipe name'
                        value={formState.name}
                        setValue={val => setFormState({...formState, name: val})}
                    />
                    <FormGroup
                        label='Description'
                        as='textarea'
                        placeholder='Description'
                        rows={5}
                        value={formState.description}
                        setValue={val => setFormState({...formState, description: val})}
                    />
                    <div className="mt-3">
                        <Row className='gx-1'>
                            <Col className='ps-0' xs={7}>
                                <FormGroup
                                    label='Preparation length (minutes)'
                                    type='number'
                                    placeholder='Preparation length in minutes'
                                    value={formState.preparationLength}
                                    setValue={val => setFormState({...formState, preparationLength: val})}
                                />
                            </Col>
                            <Col className xs={5}>
                                <FormGroup
                                    label='Final amount (servings)'
                                    type='number'
                                    placeholder='Final amount in servings'
                                    value={formState.finalAmount}
                                    setValue={val => setFormState({...formState, finalAmount: val})}
                                />
                            </Col>
                        </Row>
                    </div>

                    {/* Ingredients */}
                    <div>
                        <IngredientLabels />
                        {formState.ingredientRows.map((rowState, index) => (
                            <IngredientRow
                                key={rowState.key}
                                ingredients={ingredients}
                                state={rowState}
                                setState={(newState) => {
                                    formState.ingredientRows[index] = newState;
                                    // TODO: if the ingredient is new, add it to ingredients array (after actually creating it via network request)
                                    setFormState({...formState});
                                }}
                                onRemove={() => {
                                    formState.ingredientRows.splice(index, 1);
                                    setFormState({...formState});
                                }}
                                removeBtnDisabled={formState.ingredientRows.length === 1}
                            />
                        ))}
                        <Button className='mt-4' onClick={addIngredient}>Add ingredient</Button>

                        <Button className='mt-4 float-end' variant={"success"} type="submit" onClick={() => setShowAddRecipeConfirmDialog(true)} >Save recipe</Button>

                        <AddRecipeConfirmDialog
                            show={showAddRecipeConfirmDialog}
                            onCancel={() => {setShowAddRecipeConfirmDialog(false); setServerReply({ state: "pending"})}}
                            title={serverReply.state}
                            onSuccess={() => {setShowAddRecipeConfirmDialog(false);onHide(true); refreshPage() ; setServerReply({ state: "pending"})}}

                        >
                        </AddRecipeConfirmDialog>
                    </div>
                </Form>

            </Modal.Body>

        </Modal>
    )
}

function recipeToState(recipe) {
    return {};
}

function recipeFromState(formState) {
    return {};
}



/* Components */

const IngredientLabels = () => {
    return (
        <Row className='gx-1'>
            <Col className='ps-2' xs={7}>Ingredient</Col>
            <Col className='ps-2'>Amount</Col>
            <Col className='ps-2'>Units</Col>
            <Col style={{flex: '0 0 30px'}}></Col>
        </Row>
    )
}

const IngredientRow = ({ingredients, state, setState, onRemove, removeBtnDisabled}) => {
    const setSelected = (selected) => {
        state.selected = selected;
        setState(state);
    };
    return (
        <Row className='gx-1 mt-2 justify-content-center align-items-center'>
            <Col xs={7}>
                <Typeahead
                    style={{flexGrow: '1'}}
                    id='ingredient-typeahead'
                    placeholder='Ingredient'
                    allowNew
                    labelKey='name'
                    options={ingredients}
                    onChange={setSelected}
                    selected={state.selected}
                    onBlur={() => {!state.selected[0] && setSelected([''])}}
                    // isInvalid={!state.selected[0]}

                    // re-implemented renderMenu function, just so that we can change the newSelectionPrefix
                    renderMenu={(results, menuProps, props) => (
                        <TypeaheadMenu
                            {...menuProps}
                            labelKey={props.labelKey}
                            options={results}
                            text={props.text}
                            newSelectionPrefix='New: '
                        />
                    )}
                />
            </Col>
            <Col>
                <Form.Control type='number' min={0} value={state.amount} onChange={(event) => setState({...state, amount: event.target.value})} />
            </Col>
            <Col>
                <Form.Select onChange={(event) => setState({...state, units: event.target.value})}>
                    {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
                </Form.Select>
            </Col>
            <Col className='d-flex justify-content-center align-items-center' style={{flex: '0 0 30px'}}>
                <CloseButton onClick={onRemove} disabled={removeBtnDisabled} />
            </Col>
        </Row>
    )
}

export default RecipeEditor;