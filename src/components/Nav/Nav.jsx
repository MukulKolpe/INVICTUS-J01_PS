import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container,Nav,NavDropdown,Form,FormControl,Button } from "react-bootstrap";

const nav = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
     <Container fluid>
    <Navbar.Brand href="/">Project Showcase</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav 
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '400px' ,padding : '8px' }}
        navbarScroll
      >
        <NavDropdown style={{padding: '0 0 0 0.8rem '}} title="Department" id="navbarScrollingDropdown">
          <NavDropdown.Item >C.S.</NavDropdown.Item>
          <NavDropdown.Item>IT</NavDropdown.Item>
          <NavDropdown.Item >EXTC</NavDropdown.Item>
          <NavDropdown.Item >Instrumentation</NavDropdown.Item>
          <NavDropdown.Item >AIDS</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Sem" style={{padding: '0 0 0 0.8rem '}}  id="navbarScrollingDropdown">
          <NavDropdown.Item >Sem 1</NavDropdown.Item>
          <NavDropdown.Item>Sem 2</NavDropdown.Item>
          <NavDropdown.Item >Sem 3</NavDropdown.Item>
          <NavDropdown.Item >Sem 4</NavDropdown.Item>
          <NavDropdown.Item >Sem 5</NavDropdown.Item>
          <NavDropdown.Item >Sem 6</NavDropdown.Item>
          <NavDropdown.Item >Sem 7</NavDropdown.Item>
          <NavDropdown.Item >Sem 8</NavDropdown.Item>
        </NavDropdown>
      </Nav>
        <Button style={{margin: '0 0 0 0.8rem '}}  href= "/addproject" variant="success">Add Project</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )

}

export default nav;