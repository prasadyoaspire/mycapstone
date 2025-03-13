import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserProfile from './components/UserProfile/UserProfile';
import Login from './components/Login/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/profile"> <UserProfile/> </Route>
        <Route path="/login" component={Login}/>
      </Switch>
    </Router>

  );
};

const Nav = () => {
  return (
    <div>
      
    </div>
  );
};

export default App;