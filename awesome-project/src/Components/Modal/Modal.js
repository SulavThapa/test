import React from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import FormFunc from '../Form/Form';
import TableDesign from '../Tables/Table';


class MyVerticallyCenteredModal extends React.Component {

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
          Enter the Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormFunc />
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
      <Button onClick={() => setModalShow(true)} variant="success">Add</Button>
      <MyVerticallyCenteredModalFunction
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

export default MyVerticallyCenteredModal;