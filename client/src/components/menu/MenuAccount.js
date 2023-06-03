import { useContext, useState } from 'react'
import { Button, Form, Modal, Nav, NavDropdown, Dropdown, NavItem, NavLink, Alert } from 'react-bootstrap'

import FormGroup from '../FormGroup';
import OwnerIngredientsList from './OwnerIngredientsList';

import { login } from '../../helpers/account-helper';
import { UserContext } from '../../providers/UserProvider';

import '../../layout/NavBar.css';

const MenuAccount = () => {
    const { user, setUser, canDeleteIngredient } = useContext(UserContext);
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
            delete result.success;
            setUser(result);

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
        setUser(null);
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
            { user ? (
                // if user is logged in
                <Nav className='nav-form-log-btn'>
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>Logged in as <b>{user.username}</b></Dropdown.Toggle>
                        {/* old Dropdown.Toggle attributes: as='a' className='nav-link' role='button' tabIndex={0} href='#' */}
                        <Dropdown.Menu>
                            { canDeleteIngredient && <OwnerIngredientsList /> }
                            <NavDropdown.Item variant="log menu" onClick={logoutHandler}>Logout</NavDropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            ) : (
                // if user is not logged in
                <div className='nav-form-log-btn'>
                    <Button  onClick={() => setShowLogin(true)}>Login</Button>
                    <Button  variant='secondary'  onClick={() => setShowRegister(true)}>Register</Button>
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