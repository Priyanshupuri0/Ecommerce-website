import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./Utilities/logo.png";
import {LinkContainer} from 'react-router-bootstrap';
const navbar = () => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container>
        <Navbar.Brand href="#header"><img src={logo} alt = "logo_image" style={{ width: "2rem", height: "2rem" }}></img>Indo Web Agency</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto">
            <Nav.Link href="#header">Home</Nav.Link>
            <Nav.Link href="#content1">Feature</Nav.Link> 
            <NavDropdown title="Login" id="basic-nav-dropdown">
              <LinkContainer to="/Admin">
                <NavDropdown.Item>Admin</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item href="#action/3.2">
                Vendor
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">User</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;