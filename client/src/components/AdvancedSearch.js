import { useState } from "react";
import { Form, Row, Col, Alert, Collapse, InputGroup, Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import FormGroup from "./FormGroup";

import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';


function getDefaultSearchData(searchParams) {
    return {
        query: searchParams.get('query') || '',
        minPrepLength: searchParams.get('minPrepLength') || '',
        maxPrepLength: searchParams.get('maxPrepLength') || '',
        sort: searchParams.get('sort') || ''
    }
}


const AdvancedSearch = ({ show }) => {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const [prevSearchParams, setPrevSearchParams] = useState(searchParams);

    const [searchData, setSearchData] = useState(getDefaultSearchData(searchParams));

    // when serachParams changes
    if (searchParams !== prevSearchParams) {
        setPrevSearchParams(searchParams);

        // reset searchData state
        setSearchData(getDefaultSearchData(searchParams));
    }

    const submitHandler = (event) => {
        event.preventDefault();

        let params = new URLSearchParams();
        
        function appendParam(name, value) {
            if (value) {
                params.append(name, value)
            }
        }

        appendParam('query', searchData.query);
        appendParam('minPrepLength', searchData.minPrepLength);
        appendParam('maxPrepLength', searchData.maxPrepLength);
        appendParam('sort', searchData.sort);

        navigate(`/recipes?${params.toString()}`);
    }

    return (
        <div className="pt-3">
            <Row className="justify-content-center">
                <Col xs={12} lg={10}>
                    <Collapse in={show}>
                        <Form onSubmit={submitHandler}>
                            <Alert variant="secondary" className="pt-4 ps-4 pe-4">

                                {/* Search input */}
                                <InputGroup className="mb-4">
                                    <InputGroup.Text className="pt-1 pb-1 ps-2 pe-2" style={{backgroundColor: '#f0f3f7'}}>
                                        <Icon path={mdiMagnify} size={1} />
                                    </InputGroup.Text>
                                    <Form.Control
                                        placeholder='Search for a recipe'
                                        value={searchData.query}
                                        onChange={(event) => {
                                            setSearchData({...searchData, query: event.target.value});
                                        }}
                                    />
                                </InputGroup>

                                {/* Preparation length */}
                                <Row>
                                    <Col>
                                        <FormGroup
                                            label="Min. preparation length (minutes)"
                                            type="number"
                                            min="1"
                                            value={searchData.minPrepLength}
                                            setValue={(value) => {
                                                setSearchData({...searchData, minPrepLength: value});
                                            }}
                                        />
                                    </Col>
                                    <Col>
                                        <FormGroup
                                            label="Max. preparation length (minutes)"
                                            type="number"
                                            min="1"
                                            value={searchData.maxPrepLength}
                                            setValue={(value) => {
                                                setSearchData({...searchData, maxPrepLength: value});
                                            }}
                                        />
                                    </Col>
                                </Row>

                                {/* Sort by */}
                                <Form.Label>Sort by</Form.Label>
                                <Form.Select
                                    value={searchData.sort}
                                    onChange={(event) => {
                                        setSearchData({...searchData, sort: event.target.value});
                                    }}
                                >
                                    <option value="">None</option>
                                    <option value="nameAsc">Name - ascending</option>
                                    <option value="nameDesc">Name - descending</option>
                                    <option value="prepLengthAsc">Preparation length - ascending</option>
                                    <option value="prepLengthDesc">Preparation length - descending</option>
                                </Form.Select>

                                {/* Submit */}
                                <Button type="submit" className="mt-4 float-end">Search</Button>
                                <div className="clearfix"></div>
                            </Alert>
                        </Form>
                    </Collapse>
                </Col>
            </Row>
        </div>
    )
}

export default AdvancedSearch;
