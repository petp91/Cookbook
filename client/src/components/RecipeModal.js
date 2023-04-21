import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ConfirmationDialog from './ConfirmationDialog';
import axios from 'axios';
import CallStateModal from "./CallStateModal";
import RecipeEditor from './recipe/RecipeEditor';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function RecipeModal({ recipe, ingredients, reload }) {
    const [show, setShow] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleShow = () => setShow(!show);

    const [openAddRecipeModal, setOpenModal] = useState(false);

    const [ showAddRecipeConfirmDialog, setShowAddRecipeConfirmDialog] = useState(false)

    const [serverReply, setServerReply] = useState({
        state: "pending",
    });

    let ingredientRows = [];

    recipe.ingredients.forEach(ingredient => {

            let ingredientid = ingredients.find(e => e._id == ingredient.id);



            ingredientRows.push({
                key: crypto.randomUUID(),
                selected: [ingredientid],
                isLoading: false,
                amount: ingredient.amount.toString(),
                units:  ingredient.units
            }
            )
        }
        );
        
    function returnList (ingredientRows) {

        let returnListArray = [];

        for (let i = 0; i < ingredientRows.length; i++) {
            returnListArray.push(<ListGroup.Item as="li">{ingredients[i].name + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + ingredientRows[i].amount.toString() + "" + ingredientRows[i].units}</ListGroup.Item>);
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
                        <div style={{ flex: '1' , backgroundColor: 'blue', width: '33%'}}></div>
                        <div style={{ marginLeft: '5px', backgroundColor:'#FFFFFF', width:'66%'}}>
                            <h1 style={{textAlign: "center"}}>{recipe.name}</h1>
                            <ListGroup as="ul" style={{marginTop: '5%'}}>
                                {returnList(ingredientRows)}
                            </ListGroup>
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



