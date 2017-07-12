import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, InputGroup, ControlLabel, FormControl, Glyphicon, Row, Col, Form, Checkbox } from 'react-bootstrap';
import { login } from './loginAction';

import './login.css'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password:''
    }
  }


  onChange = (e) => {
    let state = this.state;
    let field = e.target.name;
    let value = e.target.value;
    // setState takes an object. the {} creates a new object.
    // Field is the property that you are changing.
    // if you put "field : value", js will think that are are assigning a key property of field.
    //[field] will give you the value of field which is what you would want.
    this.setState({...state, [field]: value})
    console.log('state', this.state)
  }

  onClick = (e) => {

   this.props.events(this.state, this.props.history);
  }





  render() {
    return (
    <div>
      <Row className="show-grid">
      {/* Title header */}
      <Col md={4} mdOffset={4} className="loginField">
        <h1 id="login">Login</h1>
          <h4>Share the knowledge.</h4>
          <h4>Gain the knowledge.</h4>
          <h4>Network with the best.</h4>

        {/* Email Input */}
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>

            <Col sm={10}>
              <FormControl name="email"
                           type="email"
                           placeholder="Email"
                           onChange={this.onChange}/>
            </Col>
          </FormGroup>

          {/* Password Input */}
          <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl name="password"
                             type="password"
                             placeholder="Password"
                             onChange={this.onChange}/>
              </Col>
          </FormGroup>

          {/* Remember-Me Checkbox */}
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox id="rememberMe">Remember me</Checkbox>
            </Col>
          </FormGroup>

        </Form>

        <Row className="show-grid">
        {/* Sign UP button */}
          <Col md={6} mdPush={6}>
                  <FormGroup>
                      <Col smOffset={2} sm={10}>
                        <Button type="submit"
                                onClick={this.onClick}>
                           Sign up
                        </Button>
                      </Col>
                    </FormGroup>
          </Col>

          {/* Login button */}
          <Col md={6} mdPull={6}>
                    <FormGroup>
                      <Col smOffset={2} sm={10}>
                        <Button type="submit"
                                onClick={this.onClick}>
                           Login
                        </Button>
                      </Col>
                    </FormGroup>
          </Col>
        </Row>

      </Col>
      <Col xs={6} md={4}></Col>
    </Row>
  </div>

    );
  }
}

// A higher order component is when you do a {connect}: a higher-order component is a function that takes a
// component and returns a new component.
const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
      events(state, history){
        dispatch(login(state, history))
      }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Login);
