import { Form } from 'react-bootstrap'

const FormGroup = ({ controlId, label, setValue, ...rest }) => {
    return (
        <Form.Group className='mb-3' controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control onChange={(event) => setValue(event.target.value)} {...rest} />
        </Form.Group>
    )
}

export default FormGroup;