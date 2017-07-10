import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, FormGroup, InputGroup, ControlLabel, FormControl, Glyphicon, Row, Col, Form, Checkbox } from 'react-bootstrap';
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password:''
    }
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
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

    console.log(this.state.email, this.state.password)
    //this.props.(this.state.text);
    //this.props.user.setState()
    // this.setState({
    //   username: '',
    //   password:''
    // });
  }

  handleClick = (e) => {
    this.props.history.push('/signup')
  }

  // Login.contextTypes = {
  //   router: PropTypes.object.isRequired
  // }

  render() {
    const { match, location, history } = this.props
    return (<div>

      <Row className="show-grid">
      <Col xs={6} md={4}></Col>
      <Col xs={6} md={4} className="loginField">
        <h2>Login</h2>
        <h4>Share the knowledge.</h4>
        <h4>Gain the knowledge.</h4>
        <h4>Network with the best.</h4>

        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>

            <Col sm={10}>
              <FormControl name="email" type="email"
              placeholder="Email"
              onChange={this.onChange}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl name="password" type="password"
              placeholder="password"
              onChange={this.onChange}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

        </Form>

        <Row className="show-grid">

          <Col md={6} mdPush={6}>
                  <FormGroup>
                      <Col smOffset={2} sm={10}>
                      <Button type="submit"
                      onClick={this.handleClick}>
                         Sign up
                      </Button>
                      </Col>
                    </FormGroup>
          </Col>

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

export default withRouter(Login)
