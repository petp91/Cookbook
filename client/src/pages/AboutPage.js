import { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import ConfirmationDialog from '../components/ConfirmationDialog';
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

            <div className="mt-5">
                <RecipeCard />
            </div>
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
            <Modal show={show} onHide={() => setShow(!show)} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Example pizza</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quisquam deserunt voluptates fuga aliquid, quibusdam unde at vitae, explicabo dignissimos delectus quasi nihil dolorum impedit quia. Tempora sunt non earum quaerat quibusdam praesentium nostrum natus molestias odio optio maiores cum animi maxime quisquam nobis at repellat placeat, ducimus, excepturi enim hic. Repudiandae iste numquam quisquam doloremque, nostrum alias officiis commodi magni ducimus repellendus, ad expedita, fugiat tempora fugit ipsam eum! Cupiditate laudantium quibusdam, ab doloribus impedit inventore magni repellat vero!
                    </p>

                    <Button onClick={() => setShowDeleteModal(true)}>Delete</Button>
                    <ConfirmationDialog
                        show={showDeleteModal}
                        onConfirm={() => { alert('Confirmed!'); setShowDeleteModal(false); }}
                        onCancel={() => setShowDeleteModal(false)}
                        title='Confirm delete'
                    >
                        Are you sure you want to delete this recipe?
                    </ConfirmationDialog>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AboutPage;