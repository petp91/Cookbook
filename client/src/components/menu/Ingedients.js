import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import "./Ingredients.css";
import { NavDropdown } from 'react-bootstrap';

const Ingredients = () => {
  const [show, setShow] = useState(false);
  const [ingredients, setIngredients] = useState(['flour', 'sugar', 'butter']);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRemove = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  return (
    <>
      <NavDropdown.Item onClick={()=> handleShow(Ingredients)}>Ingedients</NavDropdown.Item>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingredients</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {ingredients.length === 0 ? (
            <p>No ingredients added yet.</p>
          ) : (
            <ListGroup>
              {ingredients.map((ingredient, index) => (
                <ListGroup.Item key={index}>
                  {ingredient}
                  <CloseButton className="closeBtn" onClick={() => handleRemove(index)} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
          <Button>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Ingredients;