import { useState } from "react";
import { Form, Row, Col, Alert, Collapse } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SearchInputGroup from "./SearchInputGroup";

const AdvancedSearch = ({ show, defaultQuery }) => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState(defaultQuery || '');

    const submitHandler = (event) => {
        event.preventDefault();
        navigate(`/recipes?q=${searchInput}`);
    }

    return (
        <div className="pt-3">
            <Collapse in={show}>
                <Form onSubmit={submitHandler}>
                    <Row className='justify-content-center'>
                        <Col xs={12} lg={10}>
                            <Alert variant='secondary' className="p-4">
                                <SearchInputGroup value={searchInput} onChangeHandler={setSearchInput}/>
                            </Alert>
                        </Col>
                    </Row>
                </Form>
            </Collapse>
        </div>
    )
}

export default AdvancedSearch;
