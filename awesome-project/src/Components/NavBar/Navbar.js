import React, { Component } from 'react'
import { Navbar, Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.css';
import admin from '../../Assets/admin.png';

const NavBar = () => (
  <React.Fragment>
      <div class="sidenav">
        <img src={admin} alt="logo" style={{ height: '8%', width: '60%' }}></img>
        <Link to="/">
          <Navbar.Brand>Simple CRUD App</Navbar.Brand>
        </Link>
        <Nav className="ml-auto">
          <Link to="/admin">
            <Nav.Link href="#admin">
              Admin</Nav.Link>
          </Link>
        </Nav>
      </div>
  </React.Fragment>

);

export default NavBar;


