import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button, Row, Col } from 'react-bootstrap';

const Menu = () => {
    let favNumStyle = {
        height: '25px',
        width: '25px',
        backgroundColor: 'blue',
        display: 'inline-block',
        borderRadius: '50%',
        textAlign: 'center',
        position: 'absolute',
        right: 0,
        top: 14
    }
  return (
    <Navbar variant='dark' bg='dark'>
      <Container>
        <Nav>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/recipe'>Recipes</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
        </Nav>
        <Row className='ml-auto'>
            <Col>
                <a href='/favorites' style={{textDecoration: 'none', color: 'white', position: 'relative'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="rgb(204, 0, 0)" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
        	        </svg>
                    <span style={favNumStyle}>1</span>
                </a>
            </Col>
          <Col md={8}>
            <Form inline>
              <FormControl type='text' placeholder='....' className='mr-sm-2' />
            </Form>
          </Col>
          <Col md={2}>
            <Button variant='outline-success'>Hledat</Button>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Menu;