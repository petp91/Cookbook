import { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap'

const FormGroup = ({ controlId, label, setValue, validate, ...rest }) => {
    const formControlRef = useRef(null);
    
    const [isInvalid, setIsInvalid] = useState(false);
    
    // check validity
    useEffect(() => {
        const formControl = formControlRef.current;
        if (validate && formControl) {
            setIsInvalid(!formControl.checkValidity());
        }
    }, [rest.value, validate]);

    return (
        <Form.Group className='mb-3' controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control ref={formControlRef} onChange={(event) => setValue(event.target.value)} isInvalid={isInvalid} {...rest} />
        </Form.Group>
    )
}

export default FormGroup;