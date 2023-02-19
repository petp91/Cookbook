import React, { useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import FormGroup from './FormGroup';
import axios from 'axios';

const SubmitForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/data', formData);
            setFormSubmitted(true);
        } catch (err) {
            console.error(err);
        }
    };

    const handleReset = () => {
        setFormData({
            name: '',
            lastName: '',
            email: ''
        });
        setFormSubmitted(false);
    };

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Row>
                <Col>
                    {!formSubmitted && (
                        <Form
                            style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}
                            onSubmit={handleSubmit}
                        >
                            <FormGroup
                                controlId="formBasicName"
                                type="text"
                                label="Jméno"
                                placeholder="Zadejte jméno"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />

                            <FormGroup
                                controlId="formBasicLastName"
                                type="text"
                                label="Příjmení"
                                placeholder="Zadejte příjmení"
                                value={formData.lastName}
                                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                            />

                            <FormGroup
                                controlId="formBasicEmail"
                                type="email"
                                label="Email"
                                placeholder="Zadejte email"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />

                            <Button variant="dark" type="submit">
                                Odeslat
                            </Button>
                        </Form>
                    )}

                    {formSubmitted && (
                        <div>
                            <p>Data byla úspěšně odeslána:</p>
                            <p>Jméno: {formData.name}</p>
                            <p>Příjmení: {formData.lastName}</p>
                            <p>Email: {formData.email}</p>
                            <Button variant="primary" onClick={handleReset}>
                                Zadat znovu
                            </Button>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default SubmitForm;
