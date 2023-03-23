import React, {useEffect, useState} from "react";
import axios from "axios";
import RecipeMenuCard from "../components/MenuCard";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const MenuCardsOutput = () => {
    const [item, setItem] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8080/api/recipes')
            .then((response)=> {
                console.log(response);
                setItem(response.data);
            })
    }, [])
    return (
        <>
            <Container  // todo last row align
            >
                <Row>
                    {item.map((recipe) => {
                        return (
                            <Col class='d-flex justify-content-center'>
                                <RecipeMenuCard recipe={recipe}/>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    );
};



export default MenuCardsOutput;
