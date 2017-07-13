import React, {PropTypes} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, FormGroup, InputGroup, ControlLabel, FormControl, Glyphicon, Row, Col, Form, Checkbox } from 'react-bootstrap';

export default class MentorLandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
  }


  render() {
    return (<div>

          <h1>{this.state.user.name}</h1>
          <h3>{this.state.user.title}</h3>

</div>);
  }
}
}
