import React, {useEffect, useState} from "react";
import axios from "axios";
import RecipeMenuCard from "../components/MenuCard";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const MenuCardsOutput = () => {
    const [item, setItem] = useState([]);

    const [serverCall, setServerCall] = useState({
        state: "pending",
    });

    useEffect(()=> {
        axios.get('http://localhost:8080/api/recipes')
            .then((response)=> {
                console.log(response);
                setItem(response.data);
                setServerCall({ state: "success"});
            })
            .catch(function (error) {
                setServerCall({ state: "error"});
            });
    }, [])

    function serverResponseState() {
        switch (serverCall.state) {
            case "pending":
                return (
                    <div className="text-center">
                        <button className="btn btn-success" type="button" disabled>
                            <span className="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
                            ...loading...
                        </button>
                    </div>

                );
            case "success":
                return (
                    <>
                        <Container>
                            <Row>
                                {item.map((recipe) => {
                                    return (
                                        <Col key={recipe._id} className='d-flex justify-content-center' md={6} lg={4} xl={4} xxl={3}>
                                            <RecipeMenuCard recipe={recipe}/>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Container>
                    </>
                );
            case "error":
                return (
                    <div className="text-center">
                       <button className="btn btn-danger" type="button">
                          ...server not responding...
                      </button>
                    </div>
                );
            default:
                return null;
        }
    }

    return <div>{serverResponseState()}</div>;
}

export default MenuCardsOutput;
