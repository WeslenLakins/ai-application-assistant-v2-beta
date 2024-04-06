import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import OAuth from '../components/OAuth';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate('/');
    }

    // Cleanup function to reset auth state when component unmounts
    return () => {
      dispatch(reset());
    };
  }, [isError, isSuccess, user, message, dispatch, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(signIn(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Sign In
        </h1>
        <p>Sign in to your account to get access to all the features.</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              value={email}
              onChange={onChange}
              placeholder='Email'
              name='email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              value={password}
              onChange={onChange}
              placeholder='Password'
              name='password'
              required
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Sign In
            </button>
          </div>

          <div>
            <Link to='/forgot-password' className='forgotPasswordLink'>
              Forgot password?
            </Link>
          </div>

          <div>
            <Link to='/signup' className='registerLink'>
              Don't have an account? Sign Up
            </Link>
          </div>
        </form>

        <OAuth />

      </section>
    </>
  );
}

export default SignIn;
