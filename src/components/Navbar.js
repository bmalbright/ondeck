import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Navbar, 
    Nav, 
    Container, 
    Image
  } from 'react-bootstrap';

import "../css/App.css";

import Brand from "../images/ondeck-brand.png"

const AppNavbar = () => {
 
  return (
    <>
      <Navbar expand='lg' className="header">
        <Container fluid >
          <Navbar.Brand as={Link} to='/'>
          <Image src={Brand} alt="On Deck Brand" />
            On Deck Consulting, LLC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'>
                About Me
              </Nav.Link>
                
                  <Nav.Link as={Link} to='/aquatics'>
                    Aquatics
                  </Nav.Link>

                  <Nav.Link as={Link} to='/projects'>
                    Tech Projects
                  </Nav.Link>

                  <Nav.Link as={Link} to='/resume'>
                    Resume
                  </Nav.Link>
  
                  <Nav.Link as={Link} to='/contact'>
                    Contact Me
                  </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      
    </>
  );
};

export default AppNavbar;
