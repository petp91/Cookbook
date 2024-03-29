import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';

import SearchInputGroup from '../SearchInputGroup';
import MenuAccount from './MenuAccount';

import '../../layout/NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    setSearchInput('');
    navigate(`/recipes?query=${searchInput}`);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><NavLink to='/' className='nav-link'>Home</NavLink></li>
        <li><NavLink to='/recipes' className='nav-link'>Recipes</NavLink></li>
        <li><NavLink to='/about' className='nav-link'>About</NavLink></li>
      </ul>
      <div className="nav-form">
        <div className='nav-form-search'>
        <Form onSubmit={searchSubmitHandler}>
          <SearchInputGroup className='nav-form-search-btn' value={searchInput} onChangeHandler={setSearchInput} />
        </Form>
        </div>
        <MenuAccount />
      </div>
    </nav>
  );
};

export default NavBar;
