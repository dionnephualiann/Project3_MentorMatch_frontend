import React, {PropTypes} from 'react';

import EventPage from './components/events/eventPage';
import SignUp from './components/signUp/signUp';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import MentorLandingPage from './components/MentorLandingPage/MentorLandingPage';
import {Switch, Route} from 'react-router-dom';
import ProfilePage from './components/profile/profile';





const Main = () => (
  // switch is a component from react-router
  <Switch>
    <Route path = '/events' component = {EventPage}></Route>
    <Route path = '/profile/:id' component = {ProfilePage}></Route>
    <Route path = '/Login' component = {Login}></Route>
    <Route path = '/signUp' component = {SignUp}></Route>


    <Route path = '/LandingPage' component = {LandingPage}></Route>
    <Route path = '/MentorLandingPage' component = {MentorLandingPage}></Route>
  </Switch>


)

export default Main;
