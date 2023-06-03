import { useContext, useState } from 'react';
import { Col, Button, Modal, ListGroup } from 'react-bootstrap';
import axios from 'axios';

import ConfirmationDialog from '../ConfirmationDialog';
import CallStateModal from "../CallStateModal";
import RecipeEditor from './RecipeEditor';

import { DataContext } from '../../providers/DataProvider';
import { UserContext } from '../../providers/UserProvider';

import Logo from '../../assets/logo-512px.png';

function RecipeModal({ recipe }) {
    const { canEditRecipe, canDeleteRecipe } = useContext(UserContext);
    const [show, setShow] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const handleShow = () => setShow(!show);

    const [showEditRecipeModal, setShowEditRecipeModal] = useState(false);

    const [serverDeletionState, setServerDeletionState] = useState({ state: "pending" });
    const [showDeleteCall, setShowDeleteCall] = useState(false);

    const [servingsNumber, setServingsNumber] = useState(recipe.finalAmount);

    const serverCall = useContext(DataContext);

    let displayIngredients = [];
    let ingredientsList = serverCall.ingredients;

    // iterate over ingredients in the recipe
    recipe.ingredients.forEach(ingredient => {
        // find the specific ingredient in a list of all ingredients
        let matchedIngredient = ingredientsList.find(e => e._id === ingredient.id);

        // if the ingredient doesn't exist
        if (matchedIngredient === undefined) {
            return;
        }
        
        displayIngredients.push({
            name: matchedIngredient.name,
            amount: (ingredient.amount / recipe.finalAmount),
            units:  ingredient.units
        });
    });
    
    // this function renders the list of ingredients
    function getListOfIngredients() {
        let returnListArray = [];

        // iterate over all prepared ingredients
        for (let i = 0; i < displayIngredients.length; i++) {
            let displayAmount = displayIngredients[i].amount;
            if (servingsNumber !== undefined) {
                displayAmount *= servingsNumber;
            }

            returnListArray.push(
                <ListGroup.Item as="li" key={i}>
                    <Col>
                        {displayIngredients[i].name}
                    </Col>
                    <Col>
                        {+displayAmount.toFixed(2) + "" + displayIngredients[i].units}
                    </Col>
                </ListGroup.Item> 
            );
        }

        return returnListArray;
    }

    return (
        <>
            <Button className='w-100' variant='outline-success' onClick={handleShow}>Details</Button>

            <Modal show={show} onHide={handleShow} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex', flexDirection: 'row', flexwidth: '100%', justifyContent: 'center' , flexWrap: 'wrap'}}>
                        {/* Left-side (image) */}
                        <div>
                            <img
                                src={recipe.imageUrl || Logo}
                                alt=""
                                style={{ flex: '1', width: '400px', height: '400px', objectFit: 'cover'}}
                            ></img>
                        </div>

                        {/* Right-side (recipe name, list of ingredients, description) */}
                        <div style={{ marginLeft: '15px', backgroundColor:'#FFFFFF', width:'62%'}}>
                            <h1 style={{textAlign: "center"}}>{recipe.name}</h1>
                            <ListGroup as="ul">
                                {getListOfIngredients()}
                            </ListGroup>

                            <div style={{marginTop:'20px', flexFlow: 'column wrap'}}>
                                <label>Number of servings:</label>
                                <input
                                    type="number"
                                    className="col-sm-6 col-lg-3 col-xl-2 col-form-label"
                                    id="UserDefinedServingsNumber"
                                    onChange={e => {if (e.target.value > 0) {setServingsNumber(e.target.value)}}}
                                    value={servingsNumber} required={1}
                                    style={{marginLeft:'10px'}}
                                    placeholder={recipe.finalAmount}
                                >
                                </input>
                            </div>

                            <p style={{marginTop: '5%'}}>{recipe.description}</p>
                        </div>
                    </div>

                    {/* Bottom buttons */}
                    <div style={{ display: 'flex', flexDirection: 'row' , justifyContent: 'center'}}>
                        {/* show Edit recipe button if user has permission */}
                        { canEditRecipe &&
                            <Button
                                variant="primary"
                                style={{marginTop: '2%', marginBottom: '2%'}}
                                onClick={() => setShowEditRecipeModal(true)}
                            >
                                Edit Recipe
                            </Button>
                        }

                        <RecipeEditor
                            show={showEditRecipeModal}
                            recipe={recipe}
                            onHide={()=> { setShowEditRecipeModal(false) }}
                        />

                        {/* show Delete recipe button if user has permission */}
                        { canDeleteRecipe &&
                            <Button
                                variant="primary"
                                style={{marginTop: '2%', marginLeft:'25%', marginBottom: '2%'}}
                                onClick={() => setShowDeleteConfirmation(true)}
                            >
                                Delete
                            </Button>
                        }

                        {/* Confirmation dialog for recipe deletion */}
                        <ConfirmationDialog
                            show={showDeleteConfirmation}
                            title='Confirm delete'
                            onConfirm={() => {
                                axios.delete(`${process.env.REACT_APP_BACKEND}/api/recipes/${recipe._id}`)
                                    .then(() => {
                                        setServerDeletionState({ state: "success"})
                                    })
                                    .catch((error) => {
                                        setServerDeletionState({ state: "error"});
                                    });

                                setShowDeleteCall(true);
                                setShowDeleteConfirmation(false);
                            }}
                            onCancel={() => setShowDeleteConfirmation(false)}
                        >
                            Are you sure you want to delete this recipe?
                        </ConfirmationDialog>

                        {/* Call state for recipe deletion */}
                        <CallStateModal
                            show={showDeleteCall}
                            stateOfServer={serverDeletionState.state}
                            onSuccess={() => {
                                setShowDeleteCall(false);
                                setShow(false);
                                serverCall.reload();
                                setServerDeletionState({ state: "pending"})
                            }}
                            onCancel={() => {
                                setShowDeleteCall(false);
                                setServerDeletionState({ state: "pending"})
                            }}
                        />
                   </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default RecipeModal;