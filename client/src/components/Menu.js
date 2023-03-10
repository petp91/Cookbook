import { Navbar, Container, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <Navbar variant='dark' bg='dark'>
      <Container>
        <Nav>
          <NavLink to='/' className='nav-link'>Home</NavLink>
          <NavLink to='/recipe' className='nav-link'>Recipes</NavLink>
          <NavLink to='/about' className='nav-link'>About</NavLink>
        </Nav>
        <Form>
            <InputGroup>
                <FormControl type='text' placeholder='Search for a recipe' />
                <Button className='pt-0' variant='secondary'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </Button>
            </InputGroup>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Menu;