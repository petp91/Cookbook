import React from "react";
import RecipeMenuCard from "../components/MenuCard";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const MenuCardsOutput = ({ ingredients, serverCall, reload }) => {

    function serverResponseState() {
        switch (serverCall.state) {
            case "pending":
                return (
                    <div className="text-center">
                            <span className="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span>
                            ...loading...
                    </div>

                );
            case "success":
                return (
                    <>
                        <Container>
                            <Row>
                                {serverCall.data.map((recipe) => {
                                    return (
                                        <Col key={recipe._id} className='d-flex justify-content-center' md={6} lg={4} xl={4} xxl={3}>
                                            <RecipeMenuCard reload={reload} recipe={recipe}  ingredients={ingredients}/>
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
