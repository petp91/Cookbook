import { useState, useRef } from 'react';
import { Modal, Form, Row, Col, Button, CloseButton } from 'react-bootstrap';
import { Typeahead, TypeaheadMenu } from 'react-bootstrap-typeahead';
import axios from "axios";
import FormGroup from '../FormGroup';
import CallStateModal from "../CallStateModal";
import 'react-bootstrap-typeahead/css/Typeahead.css';

const units = ['unit1', 'unit2', 'unit3', 'unit4', 'unit5'];

const newIngredientRowObj = (recipe, ingredients) => {

    return {
        key: Math.floor(Math.random()*10e12),
        selected: [],
        isLoading: false,
        name: '',
        amount: '0',
        units: units[3]
    }
};

const RecipeEditor = ({ ingredients, recipe, show, onHide, reload }) => {
    const [formState, setFormState] = useState(recipeToState(recipe));
    const [ingredientsState, setIngredientsState] = useState(ingredients);

    console.log(JSON.stringify(formState, null, 4));

    const [ serverReply, setServerReply] = useState({
        state: "pending",
    })

    const [ showAddRecipeConfirmDialog, setShowAddRecipeConfirmDialog] = useState(false)


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
                
                let ingredientRows = [];

                recipe.ingredients.forEach(ingredient => {
                    console.log(ingredient);

                    let ingredientid = ingredients.find(e => e._id == ingredient.id);

                    ingredientRows.push({
                        key: Math.floor(Math.random()*10e12),
                        selected: [ingredientid],
                        isLoading: false,
                        amount: ingredient.amount.toString(),
                        units:  ingredient.units
                    })
                });


                recipeState = {
                    name: recipe.name,
                    description: recipe.description,
                    preparationLength: recipe.preparationLength.toString(),
                    finalAmount: recipe.finalAmount.toString(),
                    ingredientRows: ingredientRows
                }
            }


        return recipeState;
    }

    function recipeFromState () {

        let ingredientArray = [];
        for (let x in formState.ingredientRows) {
            formState.ingredientRows[x].id = formState.ingredientRows[x].selected[0]._id;
            formState.ingredientRows[x].amount = + formState.ingredientRows[x].amount;
            ingredientArray[x] = {
                id:  formState.ingredientRows[x].id,
                amount:  formState.ingredientRows[x].amount,
                units: formState.ingredientRows[x].units
            };
        }
        return({
            "name": (formState.name),
            "description": (formState.description),
            "imageId": "",
            "preparationLength": (+ formState.preparationLength),
            "finalAmount": (+ formState.finalAmount),
            "ingredients": (ingredientArray)
        });
    }

    const addIngredient = () => {
        formState.ingredientRows.push(newIngredientRowObj());
        setFormState({...formState});
    };

    const onSubmit = (event) => {
        event.preventDefault()
        if (recipe != undefined) {
            
           axios.put(`http://localhost:8080/api/recipes/${recipe._id}`, recipeFromState(formState))
                .then((response)=> {
                    setServerReply({ state: "success"});
                    console.log('success');
                })
                .catch(function (error) {
                    setServerReply({ state: "error"});
                    console.log('error');
                });


        } else {
        
        axios.post('http://localhost:8080/api/recipes', recipeFromState(formState))
            .then((response)=> {
                setServerReply({ state: "success"});
                console.log('success');
            })
            .catch(function (error) {
                setServerReply({ state: "error"});
                console.log('error');
            });
    };
}

    return (
        <Modal
               size="xl"
               fullscreen='lg-down'
               show={show}
               onHide={() => {
                   onHide()
                   setFormState(recipeToState(recipe))
               }}
               backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Recipe
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
                                    value={formState.preparationLength} required min={1}
                                    setValue={val => setFormState({...formState, preparationLength: val})}
                                />
                            </Col>
                            <Col className xs={5}>
                                <FormGroup
                                    label='Final amount (servings)'
                                    type='number'
                                    placeholder='Final amount in servings'
                                    value={formState.finalAmount} required min={1}
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

                        <CallStateModal
                            show={showAddRecipeConfirmDialog}
                            onCancel={() => {setShowAddRecipeConfirmDialog(false); setServerReply({ state: "pending"})}}
                            stateOfServer={serverReply.state}
                            onSuccess={() => {setShowAddRecipeConfirmDialog(false);onHide(true); reload() ; setServerReply({ state: "pending"})}}
                        >
                        </CallStateModal>
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
            <Col md={7} xs>Ingredient</Col>
            <Col md xs={3}>Amount</Col>
            <Col md xs={4}>Units</Col>
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
            <Col md={7} xs>
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
            <Col md xs={3}>
                <Form.Control type='number' min={0} value={state.amount} onChange={(event) => setState({...state, amount: event.target.value})} />
            </Col>
            <Col md xs={4}>
                <Form.Select value={state.units} onChange={(event) => setState({...state, units: event.target.value})}>
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