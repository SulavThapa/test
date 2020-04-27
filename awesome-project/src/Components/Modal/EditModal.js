import React from 'react';
import {Modal, Button, ButtonToolbar, Form, Row, Col} from 'react-bootstrap';
// import EditForm from "../Form/EditForm";

class MyVerticallyCenteredModalEdit extends React.Component {

  render() {
    return (
      <div>
        <ModalMaker/>
      </div>
    );
  };
}

function MyVerticallyCenteredModalFunction(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'black'}}>
          Update the Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalMaker() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button onClick={() => setModalShow(true)} variant="success">Edit</Button>
      <MyVerticallyCenteredModalFunction
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

class EditForm extends React.Component{
  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <Form.Control placeholder="Id" type="text" name="id" defaultValue={this.props.id} onChange={this.handleChange}/>
          </Col>
          <Col>
            <Form.Control placeholder="Full name" type="text" name="fullName" onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Form.Control placeholder="Temporary Address" type="text" name="temporaryAddress" onChange={this.handleChange}/>
          </Col>
          <Col>
            <Form.Control placeholder="Permanent Address" type="text" name="permanentAddress" onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Form.Control placeholder="Phone" type="text" name="phone" onChange={this.handleChange}/>
          </Col>
          <Col>
            <Form.Control placeholder="Marital Status" type="text" name="maritalStatus" onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    );
    
  }
}

export default MyVerticallyCenteredModalEdit;