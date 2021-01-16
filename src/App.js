import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import AllUsersPage from './pages/UserlistPage/AllUsersPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FemaleUsersPage from './pages/UserlistPage/FemaleUsersPage';
import MaleUsersPage from './pages/UserlistPage/MaleUsersPage';


const App = () => {
  return (
    <div className=" bg-primary w-full grid grid-cols-2 p-4">
      <Router>
        <LandingPage/>
        <Switch>
          <Route path='/' exact component={AllUsersPage} />
          <Route path='/MaleUsers' component={MaleUsersPage} />
          <Route path='/FemaleUsers' component={FemaleUsersPage} />
        </Switch>
      </Router>
      {/* <AllUsersPage/> */}
    </div>
  );
}

export default App;
