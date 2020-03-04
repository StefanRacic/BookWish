import { LOGIN, REGISTER, LOG_OUT, AUTH_ERROR, CLEAR_ERRORS } from './types';
import Axios from 'axios';

// Login User
export const login = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await Axios.post('/login', formData, config);
    dispatch({
      type: LOGIN,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response
    });
  }
};

export const register = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await Axios.post('/register', formData, config);
    dispatch({
      type: REGISTER,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response
    });
  }
};

export const logout = () => async dispatch => {
  localStorage.removeItem('token');
  localStorage.removeItem('state');
  dispatch({
    type: LOG_OUT
  });
};

export const clearErrors = () => async dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  });
};
