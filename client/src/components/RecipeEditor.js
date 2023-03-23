import { useState } from 'react';
import { Button, Form, Row, Col, CloseButton } from 'react-bootstrap';
import { Typeahead, TypeaheadMenu } from 'react-bootstrap-typeahead';
import FormGroup from './FormGroup';

import 'react-bootstrap-typeahead/css/Typeahead.css';

const units = ['test', 'test2'];
const newIngredientRowObj = () => {
    return {
        key: crypto.randomUUID(),
        selected: [''],
        amount: '0',
        units: units[0]
    }
};

const RecipeEditor = ({ ingredients }) => {
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

    console.clear();
    console.log(JSON.stringify(formState, null, 4));

    return (
        <Form>
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
                <Button className='mt-2' onClick={addIngredient}>Add ingredient</Button>
            </div>
        </Form>
    )
}

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