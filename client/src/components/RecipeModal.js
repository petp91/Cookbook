import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalWindowCSS = {
    backgroundColor: "#FFFFFF",
    margin: "10%",
    padding: "20px",
    border: "1px solid",
    width: "75%",
    height: "60%",
    display: "flex",
}
const ModalPictureCSS = {
    backgroundColor: "#red",
    width: "35%",
    height: "100%",
}
const ModalNameCSS = {
    backgroundColor: "#blue",
    width: "65%",
    height: "100%",
}
const ModalPizzaName = {
    textAlign: "center",
  }

function RecipeModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className="position-absolute translate-middle">
            <Button variant="primary" size="lg" onClick={handleShow}>
                Přidat recept
            </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detaily</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={ModalWindowCSS}>
                        <div controlId="RecipeModalPicture" style={ModalPictureCSS}></div>
                        <div controlId="RecipeModalDesc" style={ModalDescriptionCSS}>
                            <h1 style={ModalPizzaName}>Jméno pizzy</h1>
                            <ul>
                                <li>Lorem</li>
                                <li>ipsum</li>


                            </ul>
                            <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                            
                            
                            </div>
                   </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RecipeModal;



