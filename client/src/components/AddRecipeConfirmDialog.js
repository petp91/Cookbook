import {Modal, Button, Container, ModalHeader} from "react-bootstrap";

const AddRecipeConfirmDialog = (props) => {
    function serverResponseState() {
        switch (props.title) {
            case "pending":
                return (
                    <Modal backdrop="static" show={props.show} onHide={props.onCancel}>
                        <Modal.Dialog >
                            <ModalHeader>
                                <h3>
                                    Saving recipe
                                </h3>
                            </ModalHeader>

                            <Modal.Body>
                                <div className="text-center">
                                    <span className="spinner-border spinner-border-xl"  role="status" aria-hidden="true"></span>
                                </div>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal>
                );
            case "success":
                return (
                    <Modal backdrop="static" show={props.show} onHide={props.onCancel}>
                        <Modal.Dialog >
                            <Modal.Body>
                                <div className="text-center text-success">
                                    <h3>
                                        Recipe was successfully saved
                                    </h3>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="success text-center btn-block" onClick={props.onSuccess}>Close</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal>
                );
            case "error":
                return (
                    <Modal backdrop="static" show={props.show} onHide={props.onCancel}>
                        <Modal.Dialog >
                            <Modal.Body>
                                <div className="text-center text-danger">
                                    <h3>
                                       Server not responding
                                    </h3>
                                    <h3>
                                        Recipe was not saved !
                                    </h3>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={props.onCancel}>Close</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal>
                );
            default:
                return null;
        }
    }

    return <div>{serverResponseState()}</div>;
}

export default AddRecipeConfirmDialog;