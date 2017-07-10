import React, {PropTypes} from 'react';

import EventPage from './components/events/eventPage';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import {Switch, Route} from 'react-router-dom';
import ProfilePage from './components/profile/profile';





const Main = () => (
  // switch is a component from react-router
  <Switch>
    <Route path = '/events' component = {EventPage}></Route>
    <Route path = '/profile' component = {ProfilePage}></Route>
    <Route path = '/Login' component = {Login}></Route>
    <Route path = '/SignUp' component = {SignUp}></Route>
    <Route path = '/LandingPage' component = {LandingPage}></Route>
  </Switch>


)

export default Main;
