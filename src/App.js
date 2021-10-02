import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LogIn from './components/login';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={LogIn}/>
              <Route path='/login' component={LogIn}/>
              <Route path='/dashboard' component={Dashboard}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
