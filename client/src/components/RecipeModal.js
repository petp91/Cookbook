import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalPizzaName = {
    textAlign: "center",
  }

function RecipeModal() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    return (
        <>
        <div className="position-absolute top-50 translate-middle">
            <Button variant="primary" size="lg" onClick={handleShow}>Details</Button>
            </div>

            <Modal show={show} onHide={handleShow} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Detaily</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <div controlId="RecipeModalPicture" style={{ flex: '1 1 150rem' , backgroundColor: 'blue'}}></div>
                        <div controlId="RecipeModalDesc" style={{ marginLeft: '5px', backgroundColor:'#FFFFFF'}}>
                            <h1 style={ModalPizzaName}>Jméno pizzy</h1>
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

{/*    {show === false? "": <Card style={{ width: '18rem' }} show={show} onHide={handleShow}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
                          <div style={ModalWindowCSS}>
                        <div controlId="RecipeModalPicture" style={ModalPictureCSS}></div>
                        <div controlId="RecipeModalDesc" style={ModalDescriptionCSS}>
                            <h1 style={ModalPizzaName}>Jméno pizzy</h1>
                            <ul>
                                <li>Lorem</li>
                                <li>ipsum</li>


                            </ul>
                            <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                            
                            np
                            </div>
                            </div>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>}
    */}
        </>
    );
}

export default RecipeModal;



