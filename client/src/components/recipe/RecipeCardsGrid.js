import React from "react";
import RecipeCard from "./RecipeCard";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const RecipeCardsGrid = ({ ingredients, serverCall, reload }) => {

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
                            <Row>
                                {serverCall.data.map((recipe) => {
                                    return (
                                        <Col key={recipe._id} className='d-flex justify-content-center' md={6} lg={4} xl={4} xxl={3}>
                                            <RecipeCard reload={reload} recipe={recipe} ingredients={ingredients}/>
                                        </Col>
                                    )
                                })}
                            </Row>
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

export default RecipeCardsGrid;
