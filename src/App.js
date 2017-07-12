import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import initStore from './Store';
import { Provider } from 'react-redux';
import {HashRouter, Link} from 'react-router-dom';
import {logout} from './components/login/logoutAction';
import {connect} from 'react-redux';

import { Button, Navbar, NavItem, Nav, Grid, Image } from 'react-bootstrap';
import Main from './Routes';

import navbarInstance from './components/navBar/navBar';


class App extends Component {
 constructor(props){
   super(props);

}

  onClick = (e) => {
    this.props.logout(this.props.history);
  }

  render() {
    return (

      <div className="App">
        <div className="App-header">

          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <img src="../images/logo3.png" id="logo"/>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1}><Link to='/events'>Events</Link></NavItem>
                <NavItem eventKey={2}><Link to='/profile'>Profile</Link></NavItem>
                <NavItem eventKey={3} href="#">Mentor</NavItem>
                <NavItem eventKey={4} href="#">Mentee</NavItem>
                <NavItem eventKey={5}><Link to='/logout'>Logout</Link></NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </div>
        <Grid>
        <Main>
        </Main>
        </Grid>

      </div>

    );
  }
}



export default App;
