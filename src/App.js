import React, { useState } from 'react';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import Routes from './routes/Routes';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory({ basename: '/' });

const App = () => {
  return (
    <div>
      <Router history={customHistory}>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
};
export default App;
