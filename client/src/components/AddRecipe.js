import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddRecipe() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="position-absolute top-50 start-50 translate-middle">
                <Button variant="primary" size="lg" onClick={handleShow}>
                    Přidat recept
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nový recept</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formReceptName">
                            <Form.Label>Název receptu</Form.Label>
                            <Form.Control type="text" placeholder="vložte název receptu" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic1">
                            <Form.Label>Recept postup1</Form.Label>
                            <Form.Control type="text" placeholder="1" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic2">
                            <Form.Label>Recept postup2</Form.Label>
                            <Form.Control type="text" placeholder="2" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic3">
                            <Form.Label>Recept postup3</Form.Label>
                            <Form.Control type="text" placeholder="3" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic4">
                            <Form.Label>Recept postup4</Form.Label>
                            <Form.Control type="text" placeholder="4" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic5">
                            <Form.Label>Recept postup5</Form.Label>
                            <Form.Control type="text" placeholder="5" />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Zahodit změny
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Uložit změny
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddRecipe;



