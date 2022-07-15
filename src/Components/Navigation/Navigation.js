import React from 'react';
import './Navigation.css';
import {Navbar, Container, Nav, Form, Button  } from 'react-bootstrap';
import mylogo from './../../assets/logo.png';
function Navigation (props) {
    return (
        <Navbar bg="" expand="lg">
            <Container>
                <Navbar.Brand href="#"> 
                <img src={mylogo} title="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ml-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">About Us</Nav.Link>
                    <Nav.Link href="#action1">Explore Food</Nav.Link>
                    <Nav.Link href="#action2">Reviews</Nav.Link>
                    <Nav.Link href="#action1">FAQ</Nav.Link>
                    <Button variant="outline-success">01000000000</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;