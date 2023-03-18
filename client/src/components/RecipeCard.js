import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

function RecipeModal() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    return (
        <>
            <Button variant="outline-success" onClick={handleShow}>Details</Button>


    {show === false? "": <Card  style={{ width: '60rem', position: 'absolute', marginTop:'5%', marginLeft:'25%', zIndex: '1' }} show={show} onHide={handleShow}> 
    <Card.Header><Button variant="primary" style={{float: 'right', backgroundColor: '#EEEEEE', borderColor: '#EEEEEE', color:'#000000'}} onClick={handleShow}>X</Button></Card.Header>
      <Card.Body>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
            <div controlId="RecipeModalPicture" style={{ flex: '1 1 150rem' , backgroundColor: 'blue'}}></div>
            <div>
                <div controlId="RecipeModalDesc" style={{ marginLeft: '5px', backgroundColor:'#FFFFFF'}}>
                    <h1 style={{textAlign: "center"}}>Jméno pizzy</h1>
                    <p style={{ fontWeight: 'bold' }}>Ingredience:</p>
                    <ul>
                        <li>Lorem</li>
                        <li>ipsum</li>
                        <li>Lorem</li>
                        <li>ipsum</li>
                        <li>Lorem</li>
                        <li>ipsum</li>
                    </ul>
                    <p style={{ fontWeight: 'bold' }}>Popis:</p>
                    <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                            
                            np
                </div>
            </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
        <Button variant="primary" style={{marginTop: '2%', marginLeft:'15%', marginBottom: '2%'}}>Edit Recipe</Button>
        <Button variant="primary" style={{marginTop: '2%', marginLeft:'15%', marginBottom: '2%'}}>Delete Recipe</Button>
        <Button variant="primary" style={{marginTop: '2%', marginLeft:'15%', marginBottom: '2%'}}>Like</Button>
        </div>
      </Card.Body>
    </Card>
    }
        </>
    );
}

export default RecipeModal;



