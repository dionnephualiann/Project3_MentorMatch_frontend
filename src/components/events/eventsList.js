// Collection of bodies
import React, {PropTypes} from 'react';
import { Button, Row, Col} from 'react-bootstrap';
import EventBody from './eventsBody';
import { connect } from 'react-redux';
import {fetchPosts} from './Action/eventsAction';

// import './eventList.css';

// class version is required only if you need state. The only
// time you need state is if there is a visual state that is not tied to a model.
// for example a check box.
// map is iterating through the object's properties.




export const EventList = ({events, fetchPosts, history}) => (

<div>
  <Button onClick={fetchPosts(history)}></Button>
 {events.map( (eventBody, index) => {
   return (
     <EventBody key={index} {...eventBody} />
   )
  }
)}
</div>
);

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (history) => { dispatch(fetchPosts(history)); },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventList);
