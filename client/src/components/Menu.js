import { useState } from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import SearchInputGroup from './SearchInputGroup';
import MenuAccount from './MenuAccount';

const expandedNavLinkStyle = {
  paddingRight: 'var(--bs-navbar-nav-link-padding-x)',
  paddingLeft: 'var(--bs-navbar-nav-link-padding-x)'
};

const Menu = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    setSearchInput('');
    navigate(`/recipe?q=${searchInput}`);
  };

  return (
    <Navbar variant='dark' bg='dark' expand='lg' collapseOnSelect className='pt-lg-3 pb-lg-3'>
      <Container>
        <Nav className='flex-row'>
          <NavLink to='/' className='nav-link' style={expandedNavLinkStyle}>Home</NavLink>
          <NavLink to='/recipe' className='nav-link' style={expandedNavLinkStyle}>Recipes</NavLink>
          <NavLink to='/about' className='nav-link' style={expandedNavLinkStyle}>About</NavLink>
        </Nav>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Form onSubmit={searchSubmitHandler} className='mt-3 mb-1 mt-lg-0 mb-lg-0'>
              <SearchInputGroup value={searchInput} onChangeHandler={setSearchInput}/>
          </Form>
          <MenuAccount />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;