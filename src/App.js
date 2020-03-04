import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/auth/login.css';

import { Provider } from 'react-redux';
import store from './store';
import Main from '../src/components/Main';
function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
