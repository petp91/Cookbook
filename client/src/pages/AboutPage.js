import { useState } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";
import picture from '../assets/CardPicture.jpg';

const AboutPage = () => {
    return (
        <Container className="mt-4">
            <RecipeCard />
        </Container>
    );
};

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
    return (
        <>
            <Button onClick={() => setShow(!show)}>Details</Button>
            <Modal show={show} onHide={() => setShow(!show)}>
                <Modal.Header closeButton>
                    <Modal.Title>Example pizza</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AboutPage;