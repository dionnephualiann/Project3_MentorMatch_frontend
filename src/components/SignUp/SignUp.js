import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, InputGroup, ControlLabel, FormControl, Glyphicon, Row, Col, Form, Checkbox } from 'react-bootstrap';
import './SignUp.css'


export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      title: '',
      describe: '',
      skills: ''
    }
  }

  onChange = (e) => {
    let state = this.state
    let field = e.target.name;
    let value = e.target.value;
    state[field] = value
    console.log(field, value)
    this.setState(state)
    console.log('state', this.state)
  }

  onClick = (e) => {

    console.log(this.state.email,
                this.state.password,
                this.state.title,
                this.state.describe,
                this.state.skills)
  }


  render() {
    return (<div>

    <Row className="show-grid">
        <Col md={6} mdPush={6}>
        <FormGroup bsSize="large">

        <div className="SignUpField">
          <p>Skills:</p>
            <FormControl
            id="formControlsText"
            componentClass="textarea"
            style= {{ height: 200}}
            name="skills"
            placeholder="List Your Skills"
            onChange={this.onChange}/>
        </div>
        </FormGroup>


        <button type="button"
        class="btn btn-primary"
        onClick={this.onClick}>
        Sign Up</button>
        </Col>

        <Col md={6} mdPull={6}>
        <FormGroup bsSize="large">

          <div className="SignUpField">
            <p>Name:</p>
              <FormControl
              id="formControlsText"
              type="name"
              name="name"
              placeholder="Name"
              onChange={this.onChange}
              />
          </div>

          <div className="SignUpField">
            <p>Password:</p>
              <FormControl
              id="formControlsText"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.onChange}
              />
          </div>

          <div className="SignUpField">
            <p>Job Title / Business Title:</p>
              <FormControl
              id="formControlsText"
              type="title"
              name="title"
              placeholder="Job Title / Business Title"
              onChange={this.onChange}
              />
          </div>

          <div className="SignUpField">
            <p>Describe Yourself:</p>
              <FormControl
                id="formControlsText"
                componentClass="textarea"
                style= {{ height: 200}}
                name="describe"
                placeholder="Describe Yourself"
                onChange={this.onChange}/>
          </div>

        </FormGroup>

        </Col>
      </Row>


</div>);
  }
}
