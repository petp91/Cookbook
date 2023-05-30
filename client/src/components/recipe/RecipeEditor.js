import { useState, useRef, useEffect } from 'react';
import { Modal, Form, Row, Col, Button, CloseButton } from 'react-bootstrap';
import { Typeahead, TypeaheadMenu } from 'react-bootstrap-typeahead';
import axios from "axios";
import FormGroup from '../FormGroup';
import CallStateModal from "../CallStateModal";
import 'react-bootstrap-typeahead/css/Typeahead.css';

const units = ['ml', 'ks', 'g'];

const newIngredientRowObj = () => {
    return {
        key: Math.floor(Math.random()*10e12),
        selected: [],
        isLoading: false,
        name: '',
        amount: '1',
        units: units[0]
    }
};

const RecipeEditor = ({ recipe, ingredients, show, onHide, reload }) => {
    const [ingredientsState, setIngredientsState] = useState(ingredients);
    // update ingredientsState when ingredients load
    if (ingredientsState.length === 0 && ingredients.length !== 0) {
        setIngredientsState(ingredients);
    }

    const [formState, setFormState] = useState(recipeToState(recipe));
    const [isFormValid, setIsFormValid] = useState(false);

    const [serverCall, setServerCall] = useState({
        state: "pending"
    });
    
    const [showSaveRecipeCall, setShowSaveRecipeCall] = useState(false);
    
    //console.log(JSON.stringify(formState, null, 4));

    function recipeToState(recipe) {
        let recipeState;

        if(recipe === undefined) {
            // if recipe is undefined, set state to be empty
            recipeState = {
                name: '',
                description: '',
                imageUrl: '',
                preparationLength: '',
                finalAmount: '',
                ingredientRows: [ newIngredientRowObj() ]
            }
        } else {
            let ingredientRows = [];

            // iterate over ingredients in the recipe
            recipe.ingredients.forEach(ingredient => {
                // find the specific ingredient in a list of all ingredients
                let matchedIngredient = ingredientsState.find(e => e._id === ingredient.id);

                if (matchedIngredient === undefined) {
                    // if the ingredient doesn't exist
                    ingredientRows.push({
                        key: Math.floor(Math.random()*10e12),
                        selected: [],
                        isLoading: false,
                        amount: ingredient.amount.toString(),
                        units:  ingredient.units
                    });
                } else {
                    // if the ingredient exists
                    ingredientRows.push({
                        key: Math.floor(Math.random()*10e12),
                        selected: [matchedIngredient],
                        isLoading: false,
                        amount: ingredient.amount.toString(),
                        units:  ingredient.units
                    });
                }
            });

            // fill in the formState with values from recipe
            recipeState = {
                name: recipe.name,
                description: recipe.description,
                imageUrl: recipe.imageUrl,
                preparationLength: recipe.preparationLength.toString(),
                finalAmount: recipe.finalAmount.toString(),
                ingredientRows: ingredientRows
            }
        }

        return recipeState;
    }

    function recipeFromState(formState) {
        let ingredientArray = [];

        // iterate over ingredient rows
        for (let x in formState.ingredientRows) {
            ingredientArray[x] = {
                id:  formState.ingredientRows[x].selected[0]._id,
                amount:  +formState.ingredientRows[x].amount,
                units: formState.ingredientRows[x].units
            };
        }

        // return a new recipe object
        return({
            name: formState.name,
            description: formState.description,
            imageUrl: formState.imageUrl,
            preparationLength: +formState.preparationLength,
            finalAmount: +formState.finalAmount,
            ingredients: ingredientArray
        });
    }

    const addIngredientRow = () => {
        formState.ingredientRows.push(newIngredientRowObj());
        setFormState({...formState});
    };

    const onSubmit = (event) => {
        event.preventDefault();

        setShowSaveRecipeCall(true)

        if (recipe !== undefined) {
            // if recipe is not undefined, then update the existing recipe
           axios.put(`http://localhost:8080/api/recipes/${recipe._id}`, recipeFromState(formState))
                .then((response) => {
                    setServerCall({ state: "success"});
                })
                .catch((error) => {
                    setServerCall({ state: "error"});
                });
        } else {
            // if the recipe is undefined, then create a new recipe
            axios.post('http://localhost:8080/api/recipes', recipeFromState(formState))
                .then((response) => {
                    setServerCall({ state: "success"});
                })
                .catch((error) => {
                    setServerCall({ state: "error"});
                });
        };
    }

    const customOnHide = () => {
        onHide()
        setFormState(recipeToState(recipe))
    }

    // form validation
    const formRef = useRef(null);
    useEffect(() => {
        if (formRef.current && formRef.current.checkValidity()) {
            let ingredientRowsValid = formState.ingredientRows.every(ingredientRow => {
                return (ingredientRow.selected.length > 0) && (!ingredientRow.isLoading);
            });

            setIsFormValid(ingredientRowsValid);
        } else {
            setIsFormValid(false);
        }
    }, [formState, show]);


    return (
        <Modal
               size="xl"
               fullscreen='lg-down'
               show={show}
               onHide={customOnHide}
               backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Recipe
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form ref={formRef} onSubmit={onSubmit}>
                    <FormGroup
                        label='Recipe name'
                        type='text'
                        placeholder='Recipe name'
                        value={formState.name} required
                        setValue={val => setFormState({...formState, name: val})}
                        validate={true}
                    />
                    <FormGroup
                        label='Description'
                        as='textarea'
                        placeholder='Description'
                        rows={5}
                        value={formState.description} required
                        setValue={val => setFormState({...formState, description: val})}
                        validate={true}
                    />
                    <FormGroup
                        label='Image URL'
                        type='url'
                        placeholder='Image URL'
                        value={formState.imageUrl} 
                        setValue={val => setFormState({...formState, imageUrl: val})}
                        validate={true}
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
                                    validate={true}
                                />
                            </Col>
                            <Col className xs={5}>
                                <FormGroup
                                    label='Final amount (servings)'
                                    type='number'
                                    placeholder='Final amount in servings'
                                    value={formState.finalAmount} required min={1}
                                    setValue={val => setFormState({...formState, finalAmount: val})}
                                    validate={true}
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
                                        let ingredientName = newState.selected[0].name;

                                        // select a placeholder ingredient and set isLoading to true
                                        newState.selected = [{ _id: '0', name: ingredientName }];
                                        newState.isLoading = true;
                            
                                        // call the API to create a new ingredient
                                        axios.post('http://localhost:8080/api/ingredients', { name: ingredientName })
                                            .then((response) => {
                                                let newIngredient = response.data;

                                                // add the new ingredient to the ingredient list
                                                setIngredientsState((prevIngredients) => [...prevIngredients, newIngredient]);

                                                // select the new ingredient
                                                updateState({ selected: [ newIngredient ], isLoading: false});
                                            })
                                            .catch((error) => {
                                                console.error(error);
                                                alert('Unexpected error:\n' +
                                                    (error.response
                                                        ? JSON.stringify(error.response.data, null, 2)
                                                        : error.message)
                                                );
                                                updateState({ selected: [], isLoading: false});
                                            });
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
                    </div>

                    <Button className='mt-4' onClick={addIngredientRow}>Add ingredient</Button>

                    <Button className='mt-4 float-end'
                        variant={"success"}
                        type="submit"
                        disabled={!isFormValid}
                    >
                        Save recipe
                    </Button>

                    <CallStateModal
                        show={showSaveRecipeCall}
                        stateOfServer={serverCall.state}
                        onSuccess={() => {
                            setShowSaveRecipeCall(false);
                            customOnHide();
                            reload();
                            setServerCall({ state: "pending"});
                        }}
                        onCancel={() => {
                            setShowSaveRecipeCall(false);
                            setServerCall({ state: "pending"});
                        }}
                    >
                    </CallStateModal>
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

    let amount = state.amount;
    let isAmountValid = amount.length === 0 || Number.isNaN(+amount) || +amount < 1;

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
                    isInvalid={state.selected.length === 0}

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
                <Form.Control
                    type='number'
                    value={state.amount} min={1} required
                    onChange={(event) => setState({...state, amount: event.target.value})}
                    isInvalid={isAmountValid}
                />
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