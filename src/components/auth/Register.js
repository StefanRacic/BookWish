import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { register, clearErrors } from '../../actions/authActions';
import { store } from 'react-notifications-component';

const Register = ({ register, clearErrors, authenticated, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  const checkError = () => {
    store.addNotification({
      title: error.statusText,
      message: error.data,
      type: 'danger',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 1500,
        onScreen: true
      }
    });
  };

  useEffect(() => {
    if (authenticated) {
      history.push('/dashboard');
    }
    if (error !== null) {
      checkError();
      clearErrors();
    }
    // eslint-disable-next-line
  }, [authenticated, error, history]);

  const onSubmit = () => {
    if (email === '' || password === '') {
      console.log('Email and Password cant be empty');
    } else {
      const userToRegister = {
        email,
        password
      };
      register(userToRegister);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form className="form-signin">
                <div className="form-label-group">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    autoFocus
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember password
                  </label>
                </div>
                <button
                  onClick={onSubmit}
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Register
                </button>
                <hr className="my-4" />
                <button
                  className="btn btn-lg btn-google btn-block text-uppercase"
                  type="submit"
                >
                  <i className="fab fa-google mr-2" /> Sign in with Google
                </button>
                <button
                  className="btn btn-lg btn-facebook btn-block text-uppercase"
                  type="submit"
                >
                  <i className="fab fa-facebook-f mr-2" /> Sign in with Facebook
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  authenticated: PropTypes.bool,
  error: PropTypes.object,
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  error: state.auth.error
});

export default connect(mapStateToProps, { register, clearErrors })(Register);
