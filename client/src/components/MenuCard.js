import React from "react";

import '../layout/MenuCard-style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardPicture from '../assets/CardPicture.jpg'

import RecipeCard from './RecipeCard'

const RecipeMenuCard = ({ item }) => {
    return (
        <Container
        >
            <Row xs={{ cols: 1 }} md={{ cols: 3 }} className="g-6">
                {item.map((Val) => {
                    return (
                        <Card className="recipeCard text-center m-4" key={Val._id}>
                            <Card.Img src={CardPicture} alt={Val.name} />
                            <Card.Body>
                                <Card.Title>{Val.name}</Card.Title>
                                <Card.Text>
                                    {Val.description}
                                </Card.Text>
                                <RecipeCard />
                            </Card.Body>
                        </Card>
                    );
                })}
            </Row>
        </Container>
    );
};

export default RecipeMenuCard;
