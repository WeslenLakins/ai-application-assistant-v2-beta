import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>MERN Stack</Link>
      </div>
      <ul>
        <li>
          <Link to='/sign-up'>
            <FaSignInAlt /> Sign Up
          </Link>
        </li>
        <li>
          <Link to='/sign-in'>
            <FaSignInAlt /> Sign In
          </Link>
        </li>
        <li>
          <Link to='/profile'>
            <FaUser /> Profile
          </Link>
        </li>
        <li>
          <Link to='/sign-out'>
            <FaSignOutAlt /> Sign Out
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
