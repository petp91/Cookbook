import { useState } from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import SearchInputGroup from './SearchInputGroup';

const Menu = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    setSearchInput('');
    navigate(`/recipe?q=${searchInput}`);
  };

  return (
    <Navbar variant='dark' bg='dark'>
      <Container>
        <Nav>
          <NavLink to='/' className='nav-link'>Home</NavLink>
          <NavLink to='/recipe' className='nav-link'>Recipes</NavLink>
          <NavLink to='/about' className='nav-link'>About</NavLink>
        </Nav>
        <Form onSubmit={searchSubmitHandler}>
            <SearchInputGroup value={searchInput} onChangeHandler={setSearchInput}/>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Menu;