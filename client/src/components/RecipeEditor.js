import { useState, useRef } from 'react';
import { Modal, Form, Row, Col, Button, CloseButton } from 'react-bootstrap';
import { Typeahead, TypeaheadMenu } from 'react-bootstrap-typeahead';
import axios from "axios";
import FormGroup from './FormGroup';
import AddRecipeConfirmDialog from "./AddRecipeConfirmDialog";
import 'react-bootstrap-typeahead/css/Typeahead.css';

const units = ['test', 'test2'];
const newIngredientRowObj = () => {
    return {
        key: crypto.randomUUID(),
        selected: [],
        isLoading: false,
        amount: '0',
        units: units[0]
    }
};

const RecipeEditor = ({ ingredients, recipe, show, onHide }) => {
    const [formState, setFormState] = useState(recipeToState(recipe));
    const [ingredientsState, setIngredientsState] = useState(ingredients);

    console.log(JSON.stringify(formState, null, 4));

    const [ serverReply, setServerReply] = useState({
        state: "pending",
    })

    const [ showAddRecipeConfirmDialog, setShowAddRecipeConfirmDialog] = useState(false)

    function refreshPage() {  // todo ? JM refresh page to get new recipe on page and clear add form
        window.location.reload();
    }


    function recipeToState(recipe) {

        let recipeState;

            if(recipe === undefined) {

                recipeState = {
                    name: '',
                    description: '',
                    preparationLength: '',
                    finalAmount: '',
                    ingredientRows: [ newIngredientRowObj() ]
                    }

            } else {

                recipeState = {
                    name: recipe.name,
                    description: recipe.description,
                    preparationLength: recipe.preparationLength.toString(),
                    finalAmount: recipe.finalAmount.toString(),
                    ingredientRows: [ newIngredientRowObj() ]
                }
            }


        return recipeState;
    }

    function recipeFromState(formState) {
        return {};
    }

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
                <Form validated={true} onSubmit={onSubmit}>
                    <FormGroup
                        label='Recipe name'
                        type='text'
                        placeholder='Recipe name'
                        value={formState.name} required
                        setValue={val => setFormState({...formState, name: val})}
                    />
                    <FormGroup
                        label='Description'
                        as='textarea'
                        placeholder='Description'
                        rows={5}
                        value={formState.description} required
                        setValue={val => setFormState({...formState, description: val})}
                    />
                    <div className="mt-3">
                        <Row className='gx-1'>
                            <Col className='ps-0' xs={7}>
                                <FormGroup
                                    label='Preparation length (minutes)'
                                    type='number'
                                    placeholder='Preparation length in minutes'
                                    value={formState.preparationLength} required
                                    setValue={val => setFormState({...formState, preparationLength: val})}
                                />
                            </Col>
                            <Col className xs={5}>
                                <FormGroup
                                    label='Final amount (servings)'
                                    type='number'
                                    placeholder='Final amount in servings'
                                    value={formState.finalAmount} required
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
                                ingredients={ingredientsState}
                                state={rowState}
                                setState={(newState) => {
                                    // if the ingredient is new
                                    if (newState.selected[0]?.customOption) {
                                        // select a placeholder ingredient and set isLoading to true
                                        let newIngredient = { _id: '0', name: newState.selected[0].name };
                                        newState.selected = [ newIngredient ];
                                        newState.isLoading = true;
                            
                                        // call the API to create a new ingredient
                                        // TODO: replace setTimeout with an actual API call
                                        setTimeout(() => {
                                            // add the new ingredient to the ingredient list
                                            setIngredientsState((prevIngredients) => [...prevIngredients, newIngredient]);
                                            // select the newly created ingredient
                                            updateState({ selected: [ newIngredient ], isLoading: false});
                                        }, 1000);
                                    }

                                    updateState(newState);

                                    function updateState(updates) {
                                        setFormState((prevFormState) => {
                                            prevFormState = {...prevFormState};
                                            let prevRowState = prevFormState.ingredientRows[index];
                                            prevFormState.ingredientRows[index] = {...prevRowState, ...updates};
                                            return prevFormState;
                                        });
                                    }
                                }}
                                isLoading={rowState.isLoading}
                                onRemove={() => {
                                    formState.ingredientRows.splice(index, 1);
                                    setFormState({...formState});
                                }}
                                isRemoveBtnDisabled={formState.ingredientRows.length === 1}
                            />
                        ))}
                        <Button className='mt-4' onClick={addIngredient}>Add ingredient</Button>

                        <Button className='mt-4 float-end'
                                variant={"success"}
                                type="submit"
                                disabled={formState.name === "" || formState.description === "" || formState.preparationLength <1 || formState.finalAmount <1}
                                onClick={() => setShowAddRecipeConfirmDialog(true)}>Save recipe</Button>

                        <AddRecipeConfirmDialog
                            show={showAddRecipeConfirmDialog}
                            onCancel={() => {setShowAddRecipeConfirmDialog(false); setServerReply({ state: "pending"})}}
                            stateOfServer={serverReply.state}
                            onSuccess={() => {setShowAddRecipeConfirmDialog(false);onHide(true); refreshPage() ; setServerReply({ state: "pending"})}}
                        >
                        </AddRecipeConfirmDialog>
                    </div>
                </Form>

            </Modal.Body>

        </Modal>
    )
}




/* Components */

const IngredientLabels = () => {
    return (
        <Row className='gx-1'>
            <Col xs={7}>Ingredient</Col>
            <Col>Amount</Col>
            <Col>Units</Col>
            <Col style={{flex: '0 0 30px'}}></Col>
        </Row>
    )
}

const IngredientRow = ({ingredients, state, setState, isLoading, onRemove, isRemoveBtnDisabled}) => {
    const typeaheadRef = useRef();
    const setSelected = (selected) => {
        state.selected = selected;
        setState(state);
    };
    return (
        <Row className='gx-1 mt-2 justify-content-center align-items-center'>
            <Col xs={7}>
                <Typeahead
                    ref={typeaheadRef}
                    style={{flexGrow: '1'}}
                    id='ingredient-typeahead'
                    placeholder='Ingredient'
                    allowNew
                    flip
                    labelKey='name'
                    options={ingredients}
                    onChange={setSelected}
                    selected={state.selected}
                    onBlur={() => { !state.selected[0] && typeaheadRef.current.clear(); }}
                    isLoading={isLoading}
                    disabled={isLoading}
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
                <CloseButton onClick={onRemove} disabled={isRemoveBtnDisabled || isLoading} />
            </Col>
        </Row>
    )
}

export default RecipeEditor;