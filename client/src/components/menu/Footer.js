import { Link } from 'react-router-dom';

import '../../layout/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/recipes' className='nav-link'>Recipes</Link>
        <Link to='/about' className='nav-link'>About</Link>
      </div>
      <p>&copy; Unicorn University Team 5 - 2023</p>
    </footer>
  );
}

export default Footer;