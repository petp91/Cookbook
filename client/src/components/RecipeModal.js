import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ConfirmationDialog from './ConfirmationDialog';

function RecipeModal({ recipe }) {
    const [show, setShow] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleShow = () => setShow(!show);

    return (
        <>
            <Button className='w-100' variant='outline-success' onClick={handleShow}>Details</Button>

            <Modal show={show} onHide={handleShow} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Detaily</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <div style={{ flex: '1 1 150rem' , backgroundColor: 'blue'}}></div>
                        <div style={{ marginLeft: '5px', backgroundColor:'#FFFFFF'}}>
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

                    <Button variant="primary" style={{marginTop: '2%', marginLeft:'15%', marginBottom: '2%'}}>Edit Recipe</Button>

                    
                    <Button variant="primary" style={{marginTop: '2%', marginLeft:'15%', marginBottom: '2%'}} onClick={() => setShowDeleteModal(true)}>Delete</Button>
                    <ConfirmationDialog
                        show={showDeleteModal}
                        onConfirm={() => { alert('Confirmed!'); setShowDeleteModal(false); }}
                        onCancel={() => setShowDeleteModal(false)}
                        title='Confirm delete'
                    >
                        Are you sure you want to delete this recipe?
                    </ConfirmationDialog>

                    <Button variant="primary" style={{marginTop: '2%', marginLeft:'15%', marginBottom: '2%'}}>Like</Button>
                        
                   </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            
        </>
    );
}

export default RecipeModal;



