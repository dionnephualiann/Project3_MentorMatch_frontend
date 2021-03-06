// event page contains all Lists, Body and Post
import React, {PropTypes} from 'react';
import EventPost from "./eventPost";
import EventList from "./eventsList";
import {connect} from 'react-redux';
import {Authenticated} from '../auth/auth';

import './eventPage.css';


const EventPage = (props) => (
<div className="eventList">
  <EventPost />
  <EventList events={props.events || []}/>
</div>
);

const mapStateToProps = (state) => {
    return state;
}



export default connect(mapStateToProps)(Authenticated(EventPage));
