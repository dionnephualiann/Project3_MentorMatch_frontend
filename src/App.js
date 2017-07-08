import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {HashRouter, Link} from 'react-router-dom';

import { Button, Navbar, NavItem, Nav } from 'react-bootstrap';
import Main from './Routes';

import navbarInstance from './components/navBar/navBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <img src="../images/logo3.png"/>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1}><Link to='/events'>Events</Link></NavItem>
                <NavItem eventKey={2} href="#">Profile</NavItem>
                <NavItem eventKey={3} href="#">Mentor</NavItem>
                <NavItem eventKey={4} href="#">Mentee</NavItem>
                <NavItem eventKey={5} href="#">Logout</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </div>
        <Main>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Main>
      </div>
    );
  }
}

export default App;
