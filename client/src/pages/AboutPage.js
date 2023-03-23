import { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import picture from '../assets/CardPicture.jpg';

import RecipeEditor from "../components/RecipeEditor";

const AboutPage = () => {
    const ingredients = [
        {
            _id: "1",
            name: "Ingredience 1"
        },
        {
            _id: "2",
            name: "Test ingredience"
        }
    ];

    return (
        <div className="m-5 w-75">
            <RecipeEditor ingredients={ingredients} />
        </div>
    );
};




// eslint-disable-next-line
const RecipeCard = () => {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>Example pizza</Card.Title>
                <Card.Text>
                    Lorem ipsum
                </Card.Text>
                
                <RecipeDetails />
            </Card.Body>
        </Card>
    )
}

const RecipeDetails = () => {
    const [show, setShow] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    return (
        <>
            <Button onClick={() => setShow(!show)}>Details</Button>
            <Modal show={show} onHide={() => setShow(!show)}>
                <Modal.Header closeButton>
                    <Modal.Title>Example pizza</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Lorem ipsum
                    </div>

                    <Button onClick={() => setShowDeleteModal(true)}>Delete</Button>
                    <ConfirmationDialog
                        show={showDeleteModal}
                        onConfirm={() => { alert('Confirmed!'); setShowDeleteModal(false); }}
                        onCancel={() => setShowDeleteModal(false)}
                    >
                        Are you sure you want to delete this recipe?
                    </ConfirmationDialog>
                </Modal.Body>
            </Modal>
        </>
    )
}

const ConfirmationDialog = ({show, onCancel, children}) => {
    return <Modal show={show} onHide={onCancel}>
        <Modal.Body>
            {children}
        </Modal.Body>
    </Modal>
}

export default AboutPage;