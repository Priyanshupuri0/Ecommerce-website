import React from 'react';
import Navbar from './Navbar.js';
import Header from './Header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Admin.js';
import Vendor from './Vendor.js';
import User from './User.js';
import Dashboard from './Dashboard.js';
import PrivateRoute from './ProtectedRoutes.js';

function App() {
  return (
    <Router basename='/'>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path='Admin' element={<Admin/>} />
        <Route path='Vendor' element={<Vendor/>} />
        <Route path='User' element={<User/>} />
        <Route path='Dashboard' element={<Dashboard/>} />
      </Routes>
        {/* <PrivateRoute path='/Dashboard' component={<Dashboard />} /> */}
    </Router>
  );
}

export default App;
