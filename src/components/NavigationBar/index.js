import React from "react";
import { Container } from "reactstrap";
// import { NavbarWrapper } from "./styles.js";
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      variant='light'
      bg='info'
      expand='md'
      width='100%'
    >
      <Container>
        <Navbar.Brand>
          <img src='/favicon.ico' alt='Logo' height='40px' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{marginLeft: 'auto'}}>
            <Nav.Link href='/'>Tickets</Nav.Link>
            <Nav.Link href='/sprints'>Sprints</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;