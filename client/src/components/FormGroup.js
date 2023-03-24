import { Form } from 'react-bootstrap'

const FormGroup = ({ controlId, label, as, type, placeholder, rows, value, setValue }) => {
    return (
        <Form.Group className='mb-3' controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control as={as} type={type} placeholder={placeholder} rows={rows} value={value} onChange={(event) => setValue(event.target.value)} />
        </Form.Group>
    )
}

export default FormGroup;