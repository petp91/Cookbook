import {useState} from 'react'
import { Button, Form, Modal, ModalBody, Nav, NavDropdown, Dropdown } from 'react-bootstrap'
import FormGroup from './FormGroup';

const MenuAccount = () => {
    const [loggedInUsername, setLoggedInUsername] = useState(null);

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const [loginFormData, setLoginFormData] = useState({
        username: '',
        password: ''
    });
    const [registerFormData, setRegisterFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const loginHandler = e => {
        e.preventDefault();
        console.log(loginFormData);

        setLoggedInUsername(loginFormData.username);
        setShowLogin(false);
        // TODO reset form
    };
    const registerHandler = e => {
        e.preventDefault();
        console.log(registerFormData);

        setShowRegister(false);
        // TODO reset form
    };
    const logoutHandler = e => {
        setLoggedInUsername(null);
    };

    return (
        <>
            { loggedInUsername
            ? <Nav className='d-inline-block ms-3'>
                    <Dropdown className='nav-item'>
                        {/* This dropdown is made in a special way, so that we can use <b></b> tags in the dropdown title */}
                        <Dropdown.Toggle as='a' className='nav-link' role='button' tabIndex={0} href='#'>Logged in as <b>{loggedInUsername}</b></Dropdown.Toggle>
                        <Dropdown.Menu>
                            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                
            </Nav>
            : <>
                <Button className='ms-3' onClick={() => setShowLogin(true)}>Login</Button>
                <Button variant='secondary' className='ms-2' onClick={() => setShowRegister(true)}>Sign-up</Button>
            </>
            }

            <Modal show={showLogin} onHide={() => setShowLogin(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <Form onSubmit={loginHandler}>
                        <FormGroup
                            controlId='formBasicUsername'
                            label='Username'
                            type='text'
                            placeholder='Enter username'
                            value={loginFormData.username}
                            onChange={e => setLoginFormData({...loginFormData, username: e.target.value})}
                        />
                        <FormGroup
                            controlId='formBasicPassword'
                            label='Password'
                            type='password'
                            placeholder='Enter password'
                            value={loginFormData.password}
                            onChange={e => setLoginFormData({...loginFormData, password: e.target.value})}
                        />
                        <Button type='submit'>Login</Button>
                    </Form>
                </ModalBody>
            </Modal>

            <Modal show={showRegister} onHide={() => setShowRegister(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Registration</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <Form onSubmit={registerHandler}>
                        <FormGroup
                            controlId='formBasicUsername'
                            label='Username'
                            type='text'
                            placeholder='Enter username'
                            value={registerFormData.username}
                            onChange={e => setRegisterFormData({...registerFormData, username: e.target.value})}
                        />
                        <FormGroup
                            controlId='formBasicEmail'
                            label='Email'
                            type='email'
                            placeholder='Enter email'
                            value={registerFormData.email}
                            onChange={e => setRegisterFormData({...registerFormData, email: e.target.value})}
                        />
                        <FormGroup
                            controlId='formBasicPassword'
                            label='Password'
                            type='password'
                            placeholder='Enter password'
                            value={registerFormData.password}
                            onChange={e => setRegisterFormData({...registerFormData, password: e.target.value})}
                        />
                        <Button type='submit'>Register</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default MenuAccount;