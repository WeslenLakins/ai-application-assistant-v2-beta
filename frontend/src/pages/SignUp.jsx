import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';

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
    }
  };

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
      </section>
    </>
  );
}

export default SignUp;
