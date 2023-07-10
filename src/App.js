import React from 'react';
import Navbar from './Navbar.js';
import Header from './Header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Admin.js';
function App() {
  return (
    <Router basename='/'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path='Admin' element={<Admin/>} />
      </Routes>
    </Router>
  );
}

export default App;
