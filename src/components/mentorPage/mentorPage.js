import React, {PropTypes} from 'react';
import MentorPanel from "./mentorPanel";
import { Col, Grid} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Authenticated} from '../auth/auth';

import "./mentorPage.css"


const MentorPage = (props) => (
  <Grid>

      <div className="mentorpage">
        <Col md={4}><MentorPanel /></Col>
        <Col md={4}><MentorPanel /></Col>
        <Col md={4}><MentorPanel /></Col>
      </div>
    
</Grid>
);

const mapStateToProps = (state) => {
    return state;
}



export default connect(mapStateToProps)(Authenticated(MentorPage));
