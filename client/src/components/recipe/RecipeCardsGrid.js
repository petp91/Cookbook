import { useContext } from "react";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import RecipeCard from "./RecipeCard";

import Icon from '@mdi/react';
import { mdiReload } from '@mdi/js';
import { DataContext } from '../../providers/DataProvider';

const RecipeCardsGrid = ({ recipes }) => {
    const serverCall = useContext(DataContext);

    function serverResponseState() {
        switch (serverCall.state) {
            case "pending":
                return (
                    <div className="text-center">
                        <Spinner /> loading...
                    </div>
                );
            case "success":
                return (
                    <Row>
                        {recipes.map((recipe) => {
                            return (
                                <Col key={recipe._id} className='d-flex justify-content-center' md={6} lg={4} xl={4} xxl={3}>
                                    <RecipeCard recipe={recipe} />
                                </Col>
                            )
                        })}
                    </Row>
                );
            case "error":
                return (
                    <div className="text-center">
                        <h2 className="text-danger">
                            { serverCall.error?.errors ? serverCall.error.errors[0] : "Server not responding..."}
                        </h2>
                        <Button className="mb-5" onClick={serverCall.reload}>
                            <Icon path={mdiReload} size={1} />
                        </Button>
                    </div>
                );
            default:
                return null;
        }
    }

    return <div>{serverResponseState()}</div>;
}

export default RecipeCardsGrid;
