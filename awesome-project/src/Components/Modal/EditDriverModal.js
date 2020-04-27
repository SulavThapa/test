import React from 'react';
import {Modal, Button,  Form, Row, Col} from 'react-bootstrap';
import axios from "axios";

class EditDriverModal extends React.Component{
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    id: '',
    fullName: '',
    temporaryAddress: '',
    permanentAddress: '',
    phone: '',
    maritalStatus:''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit(e){
    // if(!Number(this.state.id) || !Number(this.state.phone)){
    //   e.preventDefault();
    //   alert('Must be number')
    // }else{
      // e.preventDefault();
      axios.put(`http://localhost:5000/drivers/${this.props._id}`,
          {
            id: `${this.state.id}` === "" ? `${this.props.id}` : `${this.state.id}`,
            fullName: `${this.state.fullName}` === "" ? `${this.props.fullName}` : `${this.state.fullName}`,
            temporaryAddress: `${this.state.temporaryAddress}` === "" ? `${this.props.temporaryAddress}` : `${this.state.temporaryAddress}`,
            permanentAddress: `${this.state.permanentAddress}` === "" ? `${this.props.permanentAddress}` : `${this.state.permanentAddress}`,
            phone: `${this.state.phone}` === "" ? `${this.props.phone}` : `${this.state.phone}`,
            maritalStatus: `${this.state.maritalStatus}` === "" ? `${this.props.maritalStatus}` : `${this.state.maritalStatus}`,
          } ,
          {
            headers: {
              //'Accept' : 'application/json',
              'Content-Type': 'application/json; charset=UTF-8'
            }
          })
          .then( res => {
            console.log(res);
            console.log(res.data);
          })
          .catch(err => {
            console.log(`This is the ${err} error.`)
          })
    // }
  };

  render(){
    return(
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update the Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <div className="form-group">
                    <label>Id</label>
                    <input
                      className="form-control"
                      placeholder="Id"
                      type="text"
                      disabled
                      defaultValue={this.props.id}
                      name="id"
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </Col>
                <Col>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      className="form-control"
                      placeholder="Full name"
                      type="text"
                      disabled
                      defaultValue={this.props.fullName}
                      name="fullName"
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <div className="form-group">
                    <label>Temporary Address</label>
                    <input
                      className="form-control"
                      placeholder="Temporary Address"
                      type="text"
                      defaultValue={this.props.temporaryAddress}
                      name="temporaryAddress"
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </Col>
                <Col>
                  <div className="form-group">
                    <label>Permanent Address</label>
                    <input
                        disabled
                      className="form-control"
                      placeholder="Permanent Address"
                      type="text"
                      defaultValue={this.props.permanentAddress}
                      name="permanentAddress"
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      className="form-control"
                      placeholder="Phone"
                      type="text"
                      defaultValue={this.props.phone}
                      name="phone"
                      onChange={this.handleChange}>
                    </input>
                    {this.state.phone.length > 10  ? <span style={{color: 'red', fontFamily: 'monospace'}}>
                  Phone Number Must be of 10 digits.
                </span>: ''}
                  </div>
                </Col>
                <Col>
                  <div className="form-group">
                    <label>Marital Status</label>
                    <input
                      className="form-control"
                      placeholder="Marital Status"
                      type="text"
                      defaultValue={this.props.maritalStatus}
                      name="maritalStatus"
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </Col>
              </Row>
              <br/>
              <Button
                  variant="primary"
                type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditDriverModal;