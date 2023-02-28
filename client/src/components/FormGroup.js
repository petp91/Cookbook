import { Form } from 'react-bootstrap'

const FormGroup = ({ controlId, label, type, placeholder, value, onChange }) => {
    return (
        <Form.Group className='mb-3' controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </Form.Group>
    )
}

export default FormGroup;