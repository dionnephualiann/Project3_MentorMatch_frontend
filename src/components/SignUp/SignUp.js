import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, InputGroup, ControlLabel, FormControl, Glyphicon, Row, Col, Form, Checkbox } from 'react-bootstrap';
import {signUp} from './signUpAction';
import './signUp.css';


export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      jobTitle: '',
      jobDescription: '',
      skillSet: ''
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

    this.props.profile(this.state, this.props.history);

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
                    name="skillSet"
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
              name="jobTitle"
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
                name="jobDescription"
                placeholder="Describe Yourself"
                onChange={this.onChange}/>
          </div>

          <div className="SignUpField">
            <p>Email:</p>
              <FormControl
                id="formControlsText"
                componentClass="textarea"
                name="email"
                placeholder="Email"
                onChange={this.onChange}/>
          </div>


        </FormGroup>

        </Col>
      </Row>
</div>);
  }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
      profile(state, history){
        dispatch(signUp(state, history))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
