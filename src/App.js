import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserProfile from './components/UserProfile/UserProfile';
import Login from './components/Login/Login';
import { UserProvider, useAuth } from './context/UserContext';
import Dashboard from './components/Dashboard/Dashboard';
import ScrumDetails from './components/Scrum Details/ScrumDetails';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path="/profile"> <UserProfile /> </Route>
          <Route path="/scrum/details/:id" component={ScrumDetails} />
          <Route path={["/dashboard"]} component={Dashboard} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </UserProvider>
  );
};

const Nav = () => {

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  }

  return (
    <div>
      <ul>
        <li>    <Link to="/dashboard">Dashboard</Link> </li>
        {
          user ?
            <>
              <li> <Link to="/profile">Profile</Link> </li>
              <li><button onClick={handleLogout}>Logout</button> </li>
            </>
            : <li><Link to="/login">Login</Link></li>
        }
      </ul>
    </div>
  );
};

export default App;