import { useState } from 'react'
import { Button, Form, Modal, Nav, NavDropdown, Dropdown, NavItem, NavLink, Alert } from 'react-bootstrap'

import FormGroup from '../FormGroup';
import OwnerIngredientsList from './OwnerIngredientsList';
import { login } from '../../helpers/account-helper';

const MenuAccount = () => {
    const [loggedInUsername, setLoggedInUsername] = useState(null);
    const [loginFailed, setLoginFailed] = useState(false);

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const defaultLoginData = {
        username: '',
        password: ''
    };
    const defaultRegisterData = {
        username: '',
        email: '',
        password: '',
        passwordRepeated: ''
    };
    const [loginFormData, setLoginFormData] = useState(defaultLoginData);
    const [registerFormData, setRegisterFormData] = useState(defaultRegisterData);

    const loginHandler = e => {
        e.preventDefault();

        let result = login(loginFormData.username, loginFormData.password);
        if (result.success) {
            // TODO set account context here
            setLoggedInUsername(result.username);

            hideLogin();
        } else {
            setLoginFailed(true);
        }
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

    const hideLogin = () => {
        setShowLogin(false);
        setLoginFailed(false);
        setLoginFormData(defaultLoginData);
    }

    const hideRegister = () => {
        setShowRegister(false);
        setRegisterFormData(defaultRegisterData);
    }

    return (
        <>
            { loggedInUsername ? (
                // if user is logged in
                <Nav className='ms-lg-3 align-items-center mt-2 mb-1 mt-lg-0 mb-lg-0'>
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>Logged in as <b>{loggedInUsername}</b></Dropdown.Toggle>
                        {/* old Dropdown.Toggle attributes: as='a' className='nav-link' role='button' tabIndex={0} href='#' */}
                        <Dropdown.Menu>
                            <OwnerIngredientsList />
                            <NavDropdown.Item variant="log menu" onClick={logoutHandler}>Logout</NavDropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            ) : (
                // if user is not logged in
                <div className='d-flex justify-content-center mt-3 mb-2 mt-lg-0 mb-lg-0'>
                    <Button className='ms-lg-3' onClick={() => setShowLogin(true)}>Login</Button>
                    <Button variant='secondary' className='ms-2' onClick={() => setShowRegister(true)}>Register</Button>
                </div>
            )}

            <Modal show={showLogin} onHide={hideLogin}>
                <Form onSubmit={loginHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            { loginFailed && <Alert variant='danger'>
                                Incorrect username or password
                            </Alert> }
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

            <Modal show={showRegister} onHide={hideRegister}>
                <Form onSubmit={registerHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Registration</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <Alert variant='danger'>
                                Registration is disabled
                            </Alert>
                            <FormGroup
                                controlId='formBasicUsername'
                                label='Username'
                                type='text'
                                placeholder='Enter username'
                                value={registerFormData.username}
                                setValue={val => setRegisterFormData({...registerFormData, username: val})}
                            />
                            <FormGroup
                                controlId='formBasicEmail'
                                label='Email'
                                type='email'
                                placeholder='Enter email'
                                value={registerFormData.email}
                                setValue={val => setRegisterFormData({...registerFormData, email: val})}
                            />
                            <FormGroup
                                controlId='formBasicPassword'
                                label='Password'
                                type='password'
                                placeholder='Enter password'
                                value={registerFormData.password}
                                setValue={val => setRegisterFormData({...registerFormData, password: val})}
                            />
                            <FormGroup
                                controlId='formBasicPasswordRepeated'
                                label='Repeated password'
                                type='password'
                                placeholder='Repeat password'
                                value={registerFormData.passwordRepeated}
                                setValue={val => setRegisterFormData({...registerFormData, passwordRepeated: val})}
                            />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='submit' disabled>Register</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default MenuAccount;