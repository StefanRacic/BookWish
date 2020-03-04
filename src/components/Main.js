import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';
import { connect } from 'react-redux';
import Navbar from '../components/layout/Navbar';
import Home from './pages/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './book/Dashboard';
import addBook from './book/addBook';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import Sidebar from './layout/Sidebar';

const Main = ({ authenticated }) => {
  const loggedIn = (
    <Fragment>
      <Navbar />
      <Sidebar />
    </Fragment>
  );
  const loggedOut = <Navbar />;
  return (
    <Fragment>
      <Router>
        <ReactNotification />
        {authenticated ? loggedIn : loggedOut}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/add" component={addBook} />
        </Switch>
      </Router>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps, {})(Main);
