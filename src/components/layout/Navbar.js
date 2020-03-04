import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import brand from './brand.png';
import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = ({ logout, authenticated }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const closeOnMobile = () => {
    if (isOpen == true) {
      toggle();
    }
  };

  const onLogout = () => {
    logout();
  };

  const logOutAndCloseOnMobile = () => {
    logout();
    closeOnMobile();
  };

  const loggedOut = (
    <Fragment>
      <Nav className="mr-auto" navbar>
        <Link
          className="nav-link text-white navbar-link"
          to="/"
          onClick={closeOnMobile}
        >
          Home
        </Link>
      </Nav>
      <Link
        className="nav-link text-white navbar-link"
        to="/register"
        onClick={closeOnMobile}
      >
        Register
      </Link>
      <Link
        className="nav-link text-white navbar-link"
        to="/login"
        onClick={closeOnMobile}
      >
        Login
      </Link>
    </Fragment>
  );

  const loggedIn = (
    <Fragment>
      <Nav className="mr-auto" navbar>
        <Link
          className="nav-link text-white navbar-link"
          to="/"
          onClick={closeOnMobile}
        >
          Home
        </Link>
        <Link
          className="nav-link text-white navbar-link"
          to="/dashboard"
          onClick={closeOnMobile}
        >
          Dashboard
        </Link>
      </Nav>
      <Link
        className="nav-link text-white navbar-link"
        onClick={logOutAndCloseOnMobile}
        to=""
      >
        Logout
      </Link>
    </Fragment>
  );

  return (
    <div>
      <Navbar className="bg-main-color px-md-5 nav-main" light expand="md">
        <Link className="navbar-brand text-white navbar-link" to="/">
          <img className="brand-img" src={brand} alt="" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {authenticated ? loggedIn : loggedOut}
        </Collapse>
      </Navbar>
    </div>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps, { logout })(NavBar);
