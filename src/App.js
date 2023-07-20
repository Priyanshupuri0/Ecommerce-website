import React from 'react';
import Navbar from './Navbar.js';
import Header from './Header.js';
import { BrowserRouter as Router, Routes, Route, RouterProvider, Switch } from 'react-router-dom';
import Admin from './Admin.js';
import Vendor from './Vendor.js';
import User from './User.js';
import Dashboard from './Dashboard.js';
import PrivateRoute from './ProtectedRoutes.js';
import MainComponent from './MainComponent.js';
import Cart from './Cart.js';

function App() {
  return (
    <Router basename='/'>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/mainComponent" element={<MainComponent/>} />
        <Route path = "/Cart" element={<Cart/>} />
        <Route path='Admin' element={<Admin/>} />
        <Route path='Vendor' element={<Vendor/>} />
        <Route path='User' element={<User/>} />
        <Route path='Dashboard' element={<Dashboard/>} />
        {/* <RouterProvider router = {PrivateRoute} /> */}
      </Routes>
        {/* <PrivateRoute path='/Dashboard' component={<Dashboard />} /> */}
    </Router>
  );
}

export default App;
