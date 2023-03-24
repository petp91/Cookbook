import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RecipeModal() {
    const [show, setShow] = useState(false);

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
                            <h1 style={{textAlign: "center"}}>Jméno pizzy</h1>
                            <ul>
                                <li>Lorem</li>
                                <li>ipsum</li>
                                <li>Lorem</li>
                                <li>ipsum</li>                                
                                <li>ipsum</li>

                            </ul>
                            <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                            
                            np
                            </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <Button variant="primary" style={{marginTop: '2%', marginLeft:'15%', marginBottom: '2%'}}>Edit Recipe</Button>
                        <Button variant="primary" style={{marginTop: '2%', marginLeft:'15%', marginBottom: '2%'}}>Delete Recipe</Button>
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



