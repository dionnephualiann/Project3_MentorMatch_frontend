import React, {PropTypes, Component} from 'react';
import { Button, Grid, Row, Col, Clearfix, Image, Well, Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchProfile} from './Action/profileAction'
import {Authenticated} from '../auth/auth';

import './profile.css'

export class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {show: false};
}



// member function: it is invoked by a class.
// when u create a instance of the class, u call member of functions on that class.
  componentDidMount() {
    //it's a function that hydrates the app with data(profile)
    this.props.hydrate(this.props.match.params.id)
  }


  // const Trigger = React.createClass({
  //     getInitialState() {
  //     return {show: false};
  //     },
  //
  //     showModal() {
  //     this.setState({show: true});
  //     },
  //
  //     hideModal() {
  //     this.setState({show: false});
  //     },
  //
  //

render(){
console.log(this.props.profile)
let close = () => this.setState({ show: false});
return (
  <Grid>
      <Row className="show-grid">
        <Col sm={12} md={6}>
          <Image src={this.props.profile.url} circle />
            <Well bsSize="large" className="JobTitle">
              <h1>{this.props.profile.name}</h1>
              <h2>{this.props.profile.jobTitle}</h2>
              <Button bsStyle="info"
                      className="pull-right editTitle"
                      onClick={this.showModal}>Edit</Button>
            </Well>
              <div className="Description">
              <Well bsSize="large" className="About">
                <div>{this.props.profile.jobDescription}
                </div>
                    <Button bsStyle="info"
                            className="pull-right editDescription"
                            onClick={this.showModal}>Edit</Button>
              </Well>
              </div>

        </Col>
        <Col sm={12} md={6}>
          <div className="SkillSet">
            <Well bsSize="large" className="Skillset">
              <div>{this.props.profile.skillSet}
              </div>
              <Button bsStyle="info"
                      className="pull-right editSkill"
                      onClick={this.showModal}>Edit</Button>
            </Well>
          </div>
        </Col>
      </Row>

      <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.hideModal}
            dialogClassName="custom-modal">


          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Skills</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Some text</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={close}>Close</Button>
            <Button bsStyle="primary" onClick="this.onClick">Save changes</Button>
          </Modal.Footer>
        </Modal>

    </Grid>



      )
    };
  }

// A higher order component is when you do a {connect}: a higher-order component is a function that takes a // component and returns a new component.
const mapStateToProps = (state) => {
    return state.profile;
}

const mapDispatchToProps = (dispatch) => {
    return {
      hydrate(id){
        dispatch(fetchProfile(id))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authenticated(Profile));
