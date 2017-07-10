import React, {PropTypes} from 'react';
<<<<<<< HEAD
=======
import EventPage from './components/events/eventPage';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
>>>>>>> Setup login and signup page. able to console log all Signup input field and Login input fields. have not setup routes from login page to signup page
import {Switch, Route} from 'react-router-dom';
import EventPage from './components/events/eventPage';
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
