import React, {Component, useState} from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class FormFunc extends React.Component {

  state = {
    id: '',
    fullName: '',
    temporaryAddress: '',
    permanentAddress: '',
    phone: '',
    maritalStatus:'',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit = e => {
    if(!Number(this.state.id) || !Number(this.state.phone)){
      e.preventDefault();
      alert('Must be number')
    }
    else{
      axios.post(`http://localhost:5000/drivers`,
          {
            id: `${this.state.id}`,
            fullName: `${this.state.fullName}`,
            temporaryAddress: `${this.state.temporaryAddress}`,
            permanentAddress: `${this.state.permanentAddress}`,
            phone: `${this.state.phone}`,
            maritalStatus:`${this.state.maritalStatus}`
          } ,
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json; charset=UTF-8'
            },
          })
          .then( res => {
            console.log(res);
            console.log(res.data);
          })
          .catch(err => {
            console.log(`This is the ${err} error.`)
          })
    }
    };
    canBeSubmitted (){
      const {id, fullName, temporaryAddress, permanentAddress, phone, maritalStatus} = this.state;
      return id.length == 3 &&
          fullName.length >= 5 &&
          temporaryAddress.length >= 5 &&
          permanentAddress.length >= 5 &&
          phone.length == 10 &&
          maritalStatus.length >= 4;
    }

  render() {
      const isEnabled = this.canBeSubmitted();
    return (
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
                  name="id"
                  onChange={this.handleChange}>
                </input>
                {this.state.id.length > 3 ? <span style={{color: 'red', fontFamily: 'monospace'}}>
                  Id should not be more than three numbers.
                </span>: ''}
                </div>
            </Col>
            <Col>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  className="form-control"
                  placeholder="Full name"
                  type="text"
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
                  name="temporaryAddress"
                  onChange={this.handleChange}>
                </input>
              </div>
            </Col>
            <Col>
              <div className="form-group">
                <label>Permanent Address</label>
                <input
                  className="form-control"
                  placeholder="Permanent Address"
                  type="text"
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
                  name="maritalStatus"
                  onChange={this.handleChange}>
                </input>
              </div>
            </Col>
          </Row>
          <br/>
          <Button
            disabled={!isEnabled}
            variant="primary"
            type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormFunc;