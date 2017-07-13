import React, {PropTypes} from 'react';

import EventPage from './components/events/eventPage';
import SignUp from './components/signUp/signUp';
import Login from './components/login/login';
import Logout from './components/login/logout';
import MentorPage from './components/mentorPage/mentorPage';
import {LandingPage} from './components/LandingPage/LandingPage';
import {Switch, Route} from 'react-router-dom';
import ProfilePage from './components/profile/profile';





const Main = () => (
  // switch is a component from react-router
  <Switch>
    <Route path = '/events' component = {EventPage}></Route>
    <Route path = '/profile/:id' component = {ProfilePage}></Route>
    <Route path = '/login' component = {Login}></Route>
    <Route path = '/signUp' component = {SignUp}></Route>
    <Route path = '/logout' component = {Logout}></Route>
    <Route path = '/mentorPage' component = {MentorPage}></Route>
    <Route path = '/LandingPage' component = {LandingPage}></Route>
  </Switch>


)

export default Main;
