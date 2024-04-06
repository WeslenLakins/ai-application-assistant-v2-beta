import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { signUp, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import OAuth from '../components/OAuth';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    age: '',
  });

  const { firstName, lastName, email, password, passwordConfirm, age } =
    formData;

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

    dispatch(reset());
  }, [isError, isSuccess, user, message, dispatch, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error('Passwords do not match');
      return; // Stop execution if passwords don't match
    }

    try {
      // Step 1: Create user in Firebase Authentication
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Optional: Update profile with additional details, like displayName
      await updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
      });

      // Step 2: Create a document in Firestore with the user's details
      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        email,
        age,
        createdAt: serverTimestamp(),
      });

      // Step 3: Dispatch the signUp action for MongoDB creation
      // Assuming your signUp action expects user data and the Firebase user UID
      const userDataForMongoDB = {
        firstName,
        lastName,
        email,
        password,
        age,
      };
      dispatch(signUp(userDataForMongoDB));

      // Step 4: Handle success case, like redirecting or showing a message
      toast.success('Account created successfully');
      navigate('/'); // Redirect the user after successful account creation
    } catch (error) {
      console.error('Error creating user:', error.message);
      toast.error('Error creating account. Please try again.');
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Sign Up
        </h1>
        <p>Sign up for an account to get access to all the features.</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='firstName'
              value={firstName}
              onChange={onChange}
              placeholder='First name'
              name='firstName'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='lastName'
              value={lastName}
              onChange={onChange}
              placeholder='Last name'
              name='lastName'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              value={email}
              onChange={onChange}
              placeholder='Email address'
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
            <input
              type='password'
              className='form-control'
              id='passwordConfirm'
              value={passwordConfirm}
              onChange={onChange}
              placeholder='Confirm password'
              name='passwordConfirm'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              id='age'
              value={age}
              onChange={onChange}
              placeholder='Age'
              name='age'
              required
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Sign Up
            </button>
          </div>
        </form>

        <div>
          <Link to='/signin' className='registerLink'>
            Already have an account? Sign In
          </Link>
        </div>

        <div>
          <Link to='/forgot-password' className='forgotPasswordLink'>
            Forgot password?
          </Link>
        </div>

        <OAuth />

      </section>
    </>
  );
}

export default SignUp;
