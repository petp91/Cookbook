import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ConfirmationDialog from '../ConfirmationDialog';
import axios from 'axios';
import CallStateModal from "../CallStateModal";
import RecipeEditor from './RecipeEditor';
import { ListGroup, Col } from 'react-bootstrap';

import Logo from '../../assets/logo-512px.png';

function RecipeModal({ recipe, ingredients, reload }) {
    const [show, setShow] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleShow = () => setShow(!show);

    const [openAddRecipeModal, setOpenModal] = useState(false);

    const [ showAddRecipeConfirmDialog, setShowAddRecipeConfirmDialog] = useState(false)
    const [ServingsNumber, setServingsNumber] = useState(recipe.finalAmount);

    const [serverReply, setServerReply] = useState({
        state: "pending",
    });

    let RecipeModalDisplayIngredients = [];
   
    recipe.ingredients.forEach(ingredient => {

            let ingredientHelp = ingredients.find(e => e._id == ingredient.id);

            if (ingredientHelp === undefined) {
                return;
            }
            
            RecipeModalDisplayIngredients.push({
                name: ingredientHelp.name,
                amount: ingredient.amount.toString()/recipe.finalAmount,
                units:  ingredient.units,
                
            }
            )
        }
        
        );
        
    function returnList(RecipeModalDisplayIngredients, ServingsNumber) {

        let returnListArray = [];

        if (ServingsNumber === undefined) {

        for (let i = 0; i < RecipeModalDisplayIngredients.length; i++) {
            returnListArray.push(
            <ListGroup.Item as="li" key={[i]}>
                <Col>
                    {RecipeModalDisplayIngredients[i].name}
                </Col>
                <Col>
                    {RecipeModalDisplayIngredients[i].amount.toString()*recipe.finalAmount + "" + RecipeModalDisplayIngredients[i].units}
                </Col>
            </ListGroup.Item> 
                );
        }

    } else {

        for (let i = 0; i < RecipeModalDisplayIngredients.length; i++) {
            returnListArray.push(
            <ListGroup.Item as="li" key={[i]}>
                <Col>
                    {RecipeModalDisplayIngredients[i].name}
                </Col>
                <Col>
                    {(RecipeModalDisplayIngredients[i].amount.toString()*ServingsNumber).toFixed(1) + "" + RecipeModalDisplayIngredients[i].units}
                </Col>
            </ListGroup.Item> 
                );
        }
    }

        return returnListArray;
        
    }

    return (
        <>
            <Button className='w-100' variant='outline-success' onClick={handleShow}>Details</Button>

            <Modal show={show} onHide={handleShow} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Detaily</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <div>
                            <img src={recipe.imageUrl || Logo} style={{ flex: '1', width: '400px', height: '400px', objectFit: 'cover'}}></img>
                        </div>
                        <div style={{ marginLeft: '5px', backgroundColor:'#FFFFFF', width:'66%'}}>
                            <h1 style={{textAlign: "center"}}>{recipe.name}</h1>
                            <ListGroup as="ul" style={{marginTop: '5%'}}>
                                {returnList(RecipeModalDisplayIngredients, ServingsNumber)}
                            </ListGroup>

                            <div style={{marginTop:'20px'}}>
                                <label style={{marginLeft:'10px'}}>Počet porcí</label>
                                <input 
                                    type="number" 
                                    className="col-sm-2 col-form-label" 
                                    id="UserDefinedServingsNumber" 
                                    onChange={e => {setServingsNumber(e.target.value)}} 
                                    value={ServingsNumber} style={{marginLeft:'10px'}} 
                                    placeholder={recipe.finalAmount}>
                                </input>
                            </div>

                            <p style={{marginTop: '5%'}}>{recipe.description}</p>
                            </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>

                    <Button variant="primary" style={{marginTop: '2%', marginLeft:'25%', marginBottom: '2%'}} onClick={() => setOpenModal(true)}>Edit Recipe</Button>
                    <RecipeEditor reload={reload} show={openAddRecipeModal} recipe={recipe} ingredients={ingredients} onHide={()=> {setOpenModal(false);}}/>

                    <Button variant="primary" style={{marginTop: '2%', marginLeft:'25%', marginBottom: '2%'}} onClick={() => setShowDeleteModal(true)}>Delete</Button>
                    <ConfirmationDialog
                        show={showDeleteModal}
                        onConfirm={() => {
                        axios.delete(`http://localhost:8080/api/recipes/${recipe._id}`)
                            .then(() => {
                                setShow(true);
                                setServerReply({ state: "success"})
                            })
                            .catch(function (error) {
                                setServerReply({ state: "error"});
                            });

                        setShowAddRecipeConfirmDialog(true)
                            setShowDeleteModal(false);

                    }}

                        onCancel={() => setShowDeleteModal(false)}
                        title='Confirm delete'
                    >
                        Are you sure you want to delete this recipe?

                    </ConfirmationDialog>

                        <CallStateModal
                            show={showAddRecipeConfirmDialog}
                            onCancel={() => {setShowAddRecipeConfirmDialog(false); setServerReply({ state: "pending"})}}
                            stateOfServer={serverReply.state}
                            onSuccess={() => {setShowAddRecipeConfirmDialog(false); setShow(false); reload(); setServerReply({ state: "pending"})}}
                        >
                        </CallStateModal>

                        
                   </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            
        </>
    );
}

export default RecipeModal;



