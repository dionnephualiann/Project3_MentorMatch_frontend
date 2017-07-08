import React, {PropTypes} from 'react';
import EventPage from './components/events/eventPage';
import {Switch, Route} from 'react-router-dom';


const Main = () => (
  // switch is a component from react-router
  <Switch>
    <Route path = '/events' component = {EventPage}></Route>
  </Switch>


)

export default Main;
