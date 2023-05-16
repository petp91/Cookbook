import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import '../../layout/OwnerIngredientsList.css'
import { NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import ConfirmationDialog from '../ConfirmationDialog.js';
import CallStateModal from '../CallStateModal';

const OwnerIngredientsList = () => {
  const [show, setShow] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [deleteId, setDeleteId] = useState(null);
  const [stateOfServer, setStateOfServer] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8080/api/ingredients')
      .then(response => {
        const ingredientsData = response.data.map(ingredient => {
          return {
            id: ingredient._id,
            name: ingredient.name
          };
        });
        setIngredients(ingredientsData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  }

  const handleDeleteConfirm = () => {
    setStateOfServer("pending");
    axios.delete(`http://localhost:8080/api/ingredients/${deleteId}`)
      .then(response => {
        console.log('deleted', response);
        setIngredients(ingredients => ingredients.filter(ingredient => ingredient.id !== deleteId));
        setShowDeleteModal(false);
        setStateOfServer("success");
      })
      .catch(error => {
        console.log(error);
        setStateOfServer("error");
      })
  }

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  }

  return (
    <>
      <NavDropdown.Item onClick={handleShow}>Ingredients</NavDropdown.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingredients</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {ingredients.length === 0 ? (
            <p>No ingredients added yet.</p>
          ) : (
            <ListGroup>
              {ingredients.map(ingredient => (
                <ListGroup.Item key={ingredient.id}>
                  {ingredient.name}
                  <CloseButton className="closeBtn" onClick={() => handleDelete(ingredient.id)} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <ConfirmationDialog
        show={showDeleteModal}
        title="Delete Ingredient"
        onCancel={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      >
        Are you sure you want to delete this ingredient?
      </ConfirmationDialog>

      <CallStateModal
        show={stateOfServer === "pending" || stateOfServer === "success" || stateOfServer === "error"}
        stateOfServer={stateOfServer}
        onCancel={() => setStateOfServer("")}
        onSuccess={() => setStateOfServer("")}
      />
    </>
  )
};

export default OwnerIngredientsList