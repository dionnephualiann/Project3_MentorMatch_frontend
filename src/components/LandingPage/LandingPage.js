import React, { Component, PropTypes } from 'react';
import { Button, Col, Row, Grid, } from 'react-bootstrap'

import './LandingPage.css';

export const LandingPage = (props) => (

 <Grid>
  <Row>
    <Col md={8} mdOffset={2}>
        <div className="AboutPage">

          <h1 className="about-title">Learn from the *Best* in the industry</h1>
            <h2 className="about-subTitle">What we do as a company..</h2>
              <p className="topper">MentorMatch is a professional networking platform that strives to match our
              users with the right mentors and help equip them with the right skill set for today’s
              demanding industry. We have a wide variety of skills and mentors that you
              as the <span>USER</span> get to select and meet!</p>

              <p className="footer">After all, who wouldn’t want to learn from the best and the brightest out there?
              So what are your waiting for? Come join in and meet your mentors and
              mentees right now! </p>

              <p id="signage">-The Makers of MentorMatch</p>

              </div>
          </Col>
      </Row>
</Grid>
  );
