import { React, useState } from "react";
import styles from "./M_navbar.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./Utilities/logo.png";
import Cart from "./Cart";
import Offcanvas from "react-bootstrap/Offcanvas";

const M_navbar = (props) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo_image"
              style={{ width: "2rem", height: "2rem" }}
            ></img>
            Infographics
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <NavDropdown title="Feature" id="basic-nav-dropdown">
              <div className="row">
                <div className="col-4">
                  <LinkContainer to="/Admin" >
                    <NavDropdown.Item>Admin</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Vendor">
                    <NavDropdown.Item>Vendor</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/User">
                    <NavDropdown.Item href="#action/3.3">User</NavDropdown.Item>
                  </LinkContainer>
                </div>
                <div className="col-4">
                <LinkContainer to="/Admin">
                    <NavDropdown.Item>Admin</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Vendor">
                    <NavDropdown.Item>Vendor</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/User">
                    <NavDropdown.Item href="#action/3.3">User</NavDropdown.Item>
                  </LinkContainer>
                </div>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <LinkContainer to="/User">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="" className="mx-5">
            <Nav.Link onClick = {handleShow}><i className="fa-solid fa-cart-shopping"></i></Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
      </Container>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Items in your bag</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart />
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
    
  );
};

export default M_navbar;
