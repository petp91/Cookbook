import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";
const InfoCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>

                <Link to="/form">
                    <Button variant="dark">Vyplnit formulář</Button>
                </Link>

            </Card.Body>
        </Card>
    );
};

export default InfoCard;