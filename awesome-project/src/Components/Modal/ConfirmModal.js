import React, {Component} from "react";
import {Modal, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class ConfirmModal extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


  render(){
    return(
      <Modal
        {...this.props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            LogOut
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do You Sure Want to LogOut?
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <Button variant="primary" onClick={this.onLogoutClick}>Ok</Button>
          </Link>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ConfirmModal.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(ConfirmModal);

// export default ConfirmModal;