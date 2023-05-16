import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import SearchInputGroup from './SearchInputGroup';
import MenuAccount from './menu/MenuAccount';
import '../layout/NavBar.css';

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    setSearchInput('');
    navigate(`/recipes?q=${searchInput}`);
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-links li a');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.forEach((link) => link.parentElement.classList.remove('active'));
        link.parentElement.classList.add('active');
      });
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', () => {
          navLinks.forEach((link) => link.parentElement.classList.remove('active'));
          link.parentElement.classList.add('active');
        });
      });
    };
  }, []);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to='/' className='nav-link'>Home</Link></li>
        <li><Link to='/recipes' className='nav-link'>Recipes</Link></li>
        <li><Link to='/about' className='nav-link'>About</Link></li>
      </ul>
      <div className="nav-form">
        <Form onSubmit={searchSubmitHandler} className='mt-3 mb-1 mt-lg-0 mb-lg-0'>
          <SearchInputGroup value={searchInput} onChangeHandler={setSearchInput} />
        </Form>
        <MenuAccount />
      </div>
    </nav>
  );
};

export default CustomNavbar;
