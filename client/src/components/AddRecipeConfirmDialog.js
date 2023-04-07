import {Modal, Button, Spinner} from "react-bootstrap";

const AddRecipeConfirmDialog = (props) => {
    function serverResponseState() {
        switch (props.stateOfServer) {
            case "pending":
                return (
                    <Modal backdrop="static" show={props.show} onHide={props.onCancel}>
                        <Modal.Body>
                            <div className="text-center">
                                <h3>
                                    Contacting server
                                </h3>
                                <Spinner/>
                            </div>
                        </Modal.Body>
                    </Modal>
                );
            case "success":
                return (
                    <Modal backdrop="static" show={props.show} onHide={props.onCancel}>
                            <Modal.Body>
                                <div className="text-center text-success">
                                    <h3>
                                        Done..
                                    </h3>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="success text-center btn-block" onClick={props.onSuccess}>Close</Button>
                            </Modal.Footer>
                    </Modal>
                );
            case "error":
                return (
                    <Modal backdrop="static" show={props.show} onHide={props.onCancel}>
                            <Modal.Body>
                                <div className="text-center text-danger">
                                    <h3>
                                       Server not responding
                                    </h3>
                                    <h3>
                                        Not done !
                                    </h3>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={props.onCancel}>Close</Button>
                            </Modal.Footer>
                    </Modal>
                );
            default:
                return null;
        }
    }

    return <div>{serverResponseState()}</div>;
}
export default AddRecipeConfirmDialog;