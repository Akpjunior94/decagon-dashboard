import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import UserListPage from './pages/UserlistPage/UserListPage';

const App = () => {
  return (
    <div className=" bg-primary w-full grid grid-cols-2 p-4">
     <LandingPage/>
     <UserListPage/>
    </div>
  );
}

export default App;
