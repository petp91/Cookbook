import { useState, useContext } from 'react';
import { Button, Modal, ListGroup, CloseButton, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import ConfirmationDialog from '../ConfirmationDialog';
import CallStateModal from '../CallStateModal';
import { DataContext } from '../../providers/DataProvider';

import '../../layout/OwnerIngredientsList.css'

const OwnerIngredientsList = () => {
  const { ingredients, removeIngredientById } = useContext(DataContext);
  const [show, setShow] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [deleteId, setDeleteId] = useState(null);
  const [stateOfServer, setStateOfServer] = useState("");

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteConfirmation(true);
  }

  const handleDeleteConfirm = () => {
    setStateOfServer("pending");

    axios.delete(`${process.env.REACT_APP_BACKEND}/api/ingredients/${deleteId}`)
      .then(response => {
        console.log('deleted', response);
        removeIngredientById(deleteId);
        setShowDeleteConfirmation(false);
        setStateOfServer("success");
      })
      .catch(error => {
        console.log(error);
        setStateOfServer("error");
      })
  }

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
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
            // display the list of ingredients
            <ListGroup>
              {ingredients.map(ingredient => (
                <ListGroup.Item key={ingredient._id}>
                  {ingredient.name}
                  <CloseButton className="closeBtn" onClick={() => handleDelete(ingredient._id)} />
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
        show={showDeleteConfirmation}
        title="Delete Ingredient"
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      >
        Are you sure you want to delete this ingredient?
      </ConfirmationDialog>

      <CallStateModal
        show={stateOfServer === "pending" || stateOfServer === "success" || stateOfServer === "error"}
        stateOfServer={stateOfServer}
        onSuccess={() => setStateOfServer("")}
        onCancel={() => setStateOfServer("")}
      />
    </>
  )
};

export default OwnerIngredientsList