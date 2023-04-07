import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ConfirmationDialog from './ConfirmationDialog';
import axios from 'axios';
import AddRecipeConfirmDialog from "./AddRecipeConfirmDialog";
import RecipeEditor from './RecipeEditor';

function RecipeModal({ recipe, ingredients }) {
    const [show, setShow] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleShow = () => setShow(!show);

    const [openAddRecipeModal, setOpenModal] = useState(false);

    const [ showAddRecipeConfirmDialog, setShowAddRecipeConfirmDialog] = useState(false)

    function refreshPage() {  // todo ? JM refresh page to get new recipe on page and clear add form
        window.location.reload();
    }

    const [serverReply, setServerReply] = useState({
        state: "pending",
    });

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
                            <ul>
                                <li>Lorem</li>
                                <li>ipsum</li>
                                <li>Lorem</li>
                                <li>ipsum</li>                                
                                <li>ipsum</li>

                            </ul>
                            {recipe.description}
                            </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>

                    <Button variant="primary" style={{marginTop: '2%', marginLeft:'25%', marginBottom: '2%'}} onClick={() => setOpenModal(true)}>Edit Recipe</Button>
                    <RecipeEditor show={openAddRecipeModal} recipe={recipe} ingredients={ingredients} onHide={()=> {setOpenModal(false);}}/>

                    <Button variant="primary" style={{marginTop: '2%', marginLeft:'25%', marginBottom: '2%'}} onClick={() => setShowDeleteModal(true)}>Delete</Button>
                    <ConfirmationDialog
                        show={showDeleteModal}
                        onConfirm={() => {
                        axios.delete(`http://localhost:8080/api/recipes/${recipe._id}`)
                            .then(() => {
                                setShow(true);
                                setShowDeleteModal(true);
                                setServerReply({ state: "success"})
                            })
                            .catch(function (error) {
                                setServerReply({ state: "error"});
                            });

                        setShowAddRecipeConfirmDialog(true)

                    }}

                        onCancel={() => setShowDeleteModal(false)}
                        title='Confirm delete'
                    >
                        Are you sure you want to delete this recipe?

                    </ConfirmationDialog>

                        <AddRecipeConfirmDialog
                            show={showAddRecipeConfirmDialog}
                            onCancel={() => {setShowAddRecipeConfirmDialog(false); setServerReply({ state: "pending"})}}
                            stateOfServer={serverReply.state}
                            onSuccess={() => {setShowAddRecipeConfirmDialog(false); refreshPage() ; setServerReply({ state: "pending"})}}
                        >
                        </AddRecipeConfirmDialog>

                        
                   </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            
        </>
    );
}

export default RecipeModal;



