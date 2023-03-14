import React from "react";
import '../layout/MenuCard-style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardPicture from '../assets/CardPicture.jpg'

const RecipeMenuCard = ({ item }) => {
    return (
        <Container style={{
            padding: '20px'
            }}
        >
            <Row xs={{ cols: 1 }} md={{ cols: 3 }} className="g-5">
                {item.map((Val) => {
                    return (
                        <card className="text-center"  style={{
                            width: '20rem'
                            }}>
                            <Card.Img src={CardPicture} alt={Val.displayName}/>
                            <Card.Body>
                                <Card.Title>{Val.displayName}</Card.Title>
                                <Card.Text>
                                    {Val.description}
                                </Card.Text>
                                <Button variant="btn btn-outline-success">Detail receptu
                                </Button>
                            </Card.Body>
                        </card>
                    );
                })}
            </Row>
        </Container>
    );
};

export default RecipeMenuCard;
