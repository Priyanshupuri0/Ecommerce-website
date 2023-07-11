import React from 'react';
import Navbar from './Navbar.js';
import Header from './Header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Admin.js';
import Vendor from './Vendor.js';
import User from './User.js';
function App() {
  return (
    <Router basename='/'>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path='Admin' element={<Admin/>} />
        <Route path='Vendor' element={<Vendor/>} />
        <Route path='User' element={<User/>} />
      </Routes>
    </Router>
  );
}

export default App;
