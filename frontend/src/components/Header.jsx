import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut, reset } from '../features/auth/authSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Mern Blog Home</Link>
      </div>
      <ul>
        {user ? (
          <>
            <li>
              <Link to='/profile'>
                <FaUser /> Profile
              </Link>
            </li>
            <li>
              <Link to='/signin' onClick={() => dispatch(signOut())}>
                <FaSignOutAlt /> Sign Out
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/signin'>
                <FaSignInAlt /> Sign In
              </Link>
            </li>
            <li>
              <Link to='/signup'>
                <FaUser /> Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
