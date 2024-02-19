import axios from 'axios';

const API_URL = '/api/users/';

// Sign up new user
const signUp = async (userData) => {
  const response = await axios.post(API_URL + 'signup', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Sign in user
const signIn = async (userData) => {
  const response = await axios.post(API_URL + 'signin', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Sign out user
const signOut = () => {
  localStorage.removeItem('user');
};

const authService = {
  signUp,
  signOut,
  signIn,
};

export default authService;
