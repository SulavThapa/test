import React from 'react';
import {Modal, Button,  Form, Row, Col} from 'react-bootstrap';
import axios from "axios";

class EditBusStudentsModal extends React.Component{
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    id: '',
    studentName: '',
    class: '',
    section: '',
    parentName: '',
    parentNumber: '',
    address: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit(e){
    if( !Number(this.state.phone)){
      e.preventDefault();
      alert('Must be number')
    }else{
      axios.put(`http://localhost:5000/busOneStudents/${this.props._id}`,
          {
            id: `${this.state.id}` === "" ? `${this.props.id}` : `${this.state.id}`,
            studentName: `${this.state.studentName}` === "" ? `${this.props.studentName}` : `${this.state.studentName}`,
            class: `${this.state.class}` === "" ? `${this.props.grade}` : `${this.state.class}`,
            section: `${this.state.section}` === "" ? `${this.props.section}` : `${this.state.section}`,
            parentName: `${this.state.parentName}` === "" ? `${this.props.parentName}` : `${this.state.parentName}`,
            parentNumber: `${this.state.parentNumber}` === "" ? `${this.props.parentNumber}` : `${this.state.parentNumber}`,
            address: `${this.state.address}` === "" ? `${this.props.address}` : `${this.state.address}`
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
    }
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
                    name="id"
                    disabled
                    defaultValue={this.props.id}
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
                      defaultValue={this.props.studentName}
                      name="studentName"
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <div className="form-group">
                    <label>Grade</label>
                    <input
                      className="form-control"
                      placeholder="class"
                      type="text"
                      defaultValue={this.props.grade}
                      name="class"
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </Col>
                <Col>
                  <div className="form-group">
                    <label>Section</label>
                    <input
                      className="form-control"
                      placeholder="Section"
                      type="text"
                      name="section"
                      defaultValue={this.props.section}
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <div className="form-group">
                    <label>Parent Name</label>
                    <input
                      className="form-control"
                      placeholder="Parent Name"
                      type="text"
                      defaultValue={this.props.parentName}
                      name="parentName"
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </Col>
                <Col>
                  <div className="form-group">
                    <label>Parent Number</label>
                    <input
                      className="form-control"
                      placeholder="Parent Number"
                      type="text"
                      defaultValue={this.props.parentNumber}
                      name="parentNumber"
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </Col>
                <Col>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      className="form-control"
                      placeholder="Address"
                      type="text"
                      defaultValue={this.props.address}
                      name="address"
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </Col>
              </Row>
              <br/>
              <Button
                variant="primary"
                type="submit">
                Update
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

export default EditBusStudentsModal;