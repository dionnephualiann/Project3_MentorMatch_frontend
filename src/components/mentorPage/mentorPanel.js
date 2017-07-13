import React, {PropTypes, Component} from 'react';
import { Button, Grid, Well, Row, Col, Image} from 'react-bootstrap';

import "./mentorPanel.css"

export default class MentorPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
          <Row className="show-grid">
            <Col md={3} className="mentor-panel">
              <div className="mentor">

                <Image src='../images/profile.jpg' className="profileImage" circle />

                  <Well bsSize="large" className="paneltext">
                    <h1 className="userName">User Name</h1>
                    <h2 className="JobTitle">Job Title</h2>
                  </Well>
              </div>
            </Col>
          </Row>
      </Grid>
    );
  }
}
