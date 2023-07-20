import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./Utilities/logo.png";
import { useEffect, useState, useRef } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import MainComponent from './MainComponent';
import {useLocation} from 'react-router-dom';
const NavbarComponent = () => {

  const location = useLocation();
  const ismainComponentorDashboardPage = location.pathname.includes('/mainComponent') || location.pathname.includes('/Dashboard');

  if(ismainComponentorDashboardPage) {
    return null;
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand><img src={logo} alt="logo_image" style={{ width: "2rem", height: "2rem" }}></img>Indo Web Agency</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto">
            <Nav.Link href="#header">Home</Nav.Link>
            <Nav.Link href="#content1">Feature</Nav.Link>
            <LinkContainer to="/mainComponent">
            <Nav.Link>Component</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <LinkContainer to="/Admin">
                <NavDropdown.Item>Admin</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/Vendor">
                <NavDropdown.Item>Vendor</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/User">
                <NavDropdown.Item href="#action/3.3">User</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;