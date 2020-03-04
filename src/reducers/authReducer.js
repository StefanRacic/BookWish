import jwt from 'jwt-decode';
import {
  LOGIN,
  REGISTER,
  LOG_OUT,
  AUTH_ERROR,
  CLEAR_ERRORS
} from '../actions/types';

const initialState = {
  token: null,
  authenticated: false,
  userId: null,
  user: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', action.payload.accessToken);
      const decoded = jwt(action.payload.accessToken);
      return {
        ...state,
        token: action.payload,
        userId: decoded.sub,
        user: decoded.email,
        authenticated: true
      };
    case REGISTER:
      const token = jwt(action.payload.accessToken);
      return {
        ...state,
        token: action.payload,
        userId: token.sub,
        user: token.email,
        authenticated: true
      };
    case LOG_OUT:
      return {
        ...state,
        token: null,
        authenticated: false,
        userId: null,
        user: null,
        error: null
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
