import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";

function AdddRecipe() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className>
                <Button variant="btn btn-outline-success" size="lg" style={{float: 'right'}} onClick={handleShow}>
                    Přidat recept
                </Button>
            </div>

            <Modal

                show={show}
                size="xl"
                onHide={() => setShow(false)}
                backdrop="static"

            >
                <Modal.Header closeButton>
                    <Modal.Title>Nový recept</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group className="mb-3" controlId="Název receptu">
                            <Form.Label>Název receptu</Form.Label>
                            <Form.Control type="text" name="recipeName" {...register("recipeName")} placeholder="Název receptu" />
                        </Form.Group>

                        <div className="form-group">
                            <label htmlFor="test">Recept</label>
                            <textarea className="form-control" id="nevím" rows="7" name="Recept" {...register("recipe")} placeholder="Recept" ></textarea>
                        </div>
                    </Form>
                    <Form>
                        <Row>
                            <Col xs={7}>
                                <Form.Label>Ingredience</Form.Label>
                                <Form.Control type="text" name="ingredient1" {...register("ingredient1")} placeholder="Ingredience" />
                            </Col>
                            <Col>
                                <Form.Label>Množství</Form.Label>
                                <Form.Control type="text" name="volume1" {...register("volume1")} placeholder="Množství" />
                            </Col>
                            <Col>
                                <Form.Label>Jednotky</Form.Label>
                                <Form.Control type="text" name="units1" {...register("units1")} placeholder="Jednotky" />
                            </Col>
                        </Row>
                    </Form>
                    <Form>
                        <Row>
                            <Col xs={7}>
                                <Form.Control type="text" name="ingredient2" {...register("ingredient2")} placeholder="Ingredience" />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="volume2" {...register("volume2")} placeholder="Množství" />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="units2" {...register("units2")} placeholder="Jednotky" />
                            </Col>
                        </Row>
                    </Form>
                    <Form>
                        <Row>
                            <Col xs={7}>
                                <Form.Control type="text" name="ingredient3" {...register("ingredient3")} placeholder="Ingredience" />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="volume3" {...register("volume3")} placeholder="Množství" />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="units3" {...register("units3")} placeholder="Jednotky" />
                            </Col>
                        </Row>
                    </Form>
                    <Form>
                        <Row>
                            <Col xs={7}>
                                <Form.Control type="text" name="ingredient4" {...register("ingredient4")} placeholder="Ingredience" />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="volume4" {...register("volume4")} placeholder="Množství" />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="units4" {...register("units4")} placeholder="Jednotky" />
                            </Col>
                        </Row>
                    </Form>
                    <Form>
                        <Row>
                            <Col xs={7}>
                                <Form.Control type="text" name="ingredient5" {...register("ingredient5")} placeholder="Ingredience" />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="volume5" {...register("volume5")} placeholder="Množství" />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="units5" {...register("units5")} placeholder="Jednotky" />
                            </Col>
                        </Row>
                    </Form>
                    <Form>
                        <Row>
                            <Col xs={7}>
                                <Form.Control type="text" name="ingredient6" {...register("ingredient6")} placeholder="Ingredience" />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="volume6" {...register("volume6")} placeholder="Množství" />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="units6" {...register("units6")} placeholder="Jednotky" />
                            </Col>
                        </Row>
                    </Form>
                    <Form>
                        <Row>
                            <Col xs={7}>
                                <Form.Control type="text" name="ingredient7" {...register("ingredient7")} placeholder="Ingredience" />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="volume7" {...register("volume7")} placeholder="Množství" />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="units7" {...register("units7")} placeholder="Jednotky" />
                            </Col>
                        </Row>
                    </Form>
                    <Form>
                        <Row>
                            <Col xs={7}>
                                <Form.Control type="text" name="ingredient8" {...register("ingredient8")} placeholder="Ingredience" />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="volume8" {...register("volume8")} placeholder="Množství" />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="units8" {...register("units8")} placeholder="Jednotky" />
                            </Col>
                        </Row>
                    </Form>

                </Modal.Body>
                <Modal.Footer>

                    <div className="form-control">
                        <label>
                            <Form>
                                <Button variant={"primary"} onSubmit={handleSubmit(onSubmit)} type="submit">Ulož recept</Button>
                            </Form>

                        </label>
                    </div>
                </Modal.Footer>
            </Modal>
        </Form>
    );

}

export default AdddRecipe;

