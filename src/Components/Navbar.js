// src/Components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import logo from './logo.jpeg';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar bg="dark" expand="lg" fixed="top" className={scrolled ? 'navbar-scrolled' : ''}>
      <Container>
      <Link className="navbar-brand" to="/">
          <img src="logo.jpeg" alt="" className="d-inline-block align-top" />
        </Link>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '40px', height: '40px' }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: 'rgb(139, 196, 235)' }}>Home</Nav.Link>
            <Nav.Link href="/industries" style={{ color: 'rgb(139, 196, 235)' }}>Industries</Nav.Link>
            <Nav.Link href="/services" style={{ color: 'rgb(139, 196, 235)' }}>Services</Nav.Link>
            <Nav.Link href="/team" style={{ color: 'rgb(139, 196, 235)' }}> Team</Nav.Link>
            <Nav.Link href="/clients" style={{ color: 'rgb(139, 196, 235)' }}>Clients</Nav.Link>
            <Nav.Link href="/contact" style={{ color: 'rgb(139, 196, 235)' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
