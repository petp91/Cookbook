import { useState } from 'react'
import { Button, Form, Modal, Nav, NavDropdown, Dropdown } from 'react-bootstrap'
import FormGroup from './FormGroup';

const MenuAccount = () => {
    const [loggedInUsername, setLoggedInUsername] = useState(null);

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const defaultLoginData = {
        username: '',
        password: ''
    };
    const defaultRegisterData = {
        username: '',
        email: '',
        password: ''
    };
    const [loginFormData, setLoginFormData] = useState(defaultLoginData);
    const [registerFormData, setRegisterFormData] = useState(defaultRegisterData);

    const loginHandler = e => {
        e.preventDefault();
        console.log(loginFormData);

        setLoggedInUsername(loginFormData.username);
        setShowLogin(false);
        setLoginFormData(defaultLoginData);
    };
    const registerHandler = e => {
        e.preventDefault();
        console.log(registerFormData);

        setShowRegister(false);
        setRegisterFormData(defaultRegisterData);
    };
    const logoutHandler = e => {
        setLoggedInUsername(null);
    };

    return (
        <>
            { loggedInUsername ? (
                <Nav className='d-inline-block ms-3'>
                    <Dropdown className='nav-item'>
                        {/* This dropdown is made in a special way, so that we can use <b></b> tags in the dropdown title */}
                        <Dropdown.Toggle as='a' className='nav-link' role='button' tabIndex={0} href='#'>Logged in as <b>{loggedInUsername}</b></Dropdown.Toggle>
                        <Dropdown.Menu>
                            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            ) : (
                <>
                    <Button className='ms-3' onClick={() => setShowLogin(true)}>Login</Button>
                    <Button variant='secondary' className='ms-2' onClick={() => setShowRegister(true)}>Register</Button>
                </>
            )}

            <Modal show={showLogin} onHide={() => setShowLogin(false)}>
                <Form onSubmit={loginHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <FormGroup
                                controlId='formBasicUsername'
                                label='Username'
                                type='text'
                                placeholder='Enter username'
                                value={loginFormData.username}
                                setValue={val => setLoginFormData({...loginFormData, username: val})}
                            />
                            <FormGroup
                                controlId='formBasicPassword'
                                label='Password'
                                type='password'
                                placeholder='Enter password'
                                value={loginFormData.password}
                                setValue={val => setLoginFormData({...loginFormData, password: val})}
                            />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='submit'>Login</Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            <Modal show={showRegister} onHide={() => setShowRegister(false)}>
                <Form onSubmit={registerHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Registration</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <FormGroup
                                controlId='formBasicUsername'
                                label='Username'
                                type='text'
                                placeholder='Enter username'
                                value={registerFormData.username}
                                setValue={val => setLoginFormData({...loginFormData, username: val})}
                            />
                            <FormGroup
                                controlId='formBasicEmail'
                                label='Email'
                                type='email'
                                placeholder='Enter email'
                                value={registerFormData.email}
                                setValue={val => setLoginFormData({...loginFormData, email: val})}
                            />
                            <FormGroup
                                controlId='formBasicPassword'
                                label='Password'
                                type='password'
                                placeholder='Enter password'
                                value={registerFormData.password}
                                setValue={val => setLoginFormData({...loginFormData, password: val})}
                            />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='submit'>Register</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default MenuAccount;