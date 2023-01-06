import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const handelSignOut = ()=>{
    signOut(auth);
  }
    return (
      <>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/' href='#home'>
          <img src={logo} height='40' alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>
            <Nav.Link href="home#experts">Experts</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            {
              user? <Nav.Link onClick={handelSignOut} as={Link} to="login" eventKey={2} href="#login">
              Log out
            </Nav.Link>:<Nav.Link as={Link} to="login" eventKey={2} href="#login">
              Login
            </Nav.Link>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>  
    );
};

export default Header;