import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          SignIn
        </Route>
        <Route exact path="/sign-up">
          SignUp
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
