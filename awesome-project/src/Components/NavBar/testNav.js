import React, { Component } from 'react';
import './test.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faTable, faUnlock, faBus, faMapMarkedAlt, faHistory, faRegistered } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import bus from "../Image/bus.png";
import {Button} from 'react-bootstrap';
import ConfirmModal from "../Modal/ConfirmModal";


library.add(faHome, faTable, faUnlock, faBus,faMapMarkedAlt, faHistory,faRegistered);

const testAlert = (
  <div className="alert alert-warning" role="alert">
    This is a warning alert—check it out!
  </div>
);

class TestNav extends React.Component {
  state = {
    addModalShow: false
  }
  render() {
    let addModalClose = () => this.setState({addModalShow : false});

    return (
      <React.Fragment>
        <nav className="navbar navbar-dark fixed-top bg-secondary flex-md-nowrap p-0 shadow" style={{backgroundColor: "rgba(92,113,116,0.57)"}}>
          <Link to="/admin">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0">
              <span style={{fontFamily: 'sans-serif', color: 'white'}}>SECURE</span></a>
          </Link>
          <ul class="navbar-nav px-3">
              <li class="nav-item text-nowrap">
                <Button variant="secondary" onClick={() =>this.setState({
                  addModalShow: true
                })
                }>Sign Out</Button>
                <ConfirmModal
                  show = {this.state.addModalShow}
                  onHide = {addModalClose}
                  />
              </li>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-dark sidebar shadow">
              <div className="sidebar-sticky" >
                <ul className="nav flex-column">
                  <h6
                    className="sidebar-heading d-flex justify-content-between align-items-center px-2 mb-1 text-muted">
                    <span className="shadow" style={{fontFamily: 'monospace', fontSize: '13px'}}>Tracker</span>
                  </h6>
                  <li className="nav-item px-3">
                    <Link to="/admin">
                    <a className="nav-link" >
                      <FontAwesomeIcon className="side" icon="map-marked-alt" style={{color: '#ffc02d'}}/>
                      Map
                    </a>
                    </Link>
                  </li>
                  <h6
                    className="sidebar-heading d-flex justify-content-between align-items-center px-2 mb-1 text-muted">
                    <span className="shadow" style={{fontFamily: 'monospace', fontSize: '13px'}}>Student Details</span>
                  </h6>
                  <li className="nav-item px-3">
                    <Link to="/details">
                      <a className="nav-link">
                        <FontAwesomeIcon className="side" icon="table" style={{color: '#5b82ff'}}/>
                        Details
                      </a>
                    </Link>
                  </li>
                  <h6
                    className="sidebar-heading d-flex justify-content-between align-items-center px-2 mb-1 text-muted">
                    <span className="shadow" style={{fontFamily: 'monospace', fontSize: '13px'}}>Driver Details</span>
                  </h6>
                  <li className="nav-item px-3">
                    <Link to="/busDetails">
                      <a className="nav-link">
                        <FontAwesomeIcon className="side" icon="bus" style={{color: '#ff4646'}}/>
                        Bus Info
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item px-3">
                    <Link to="/busHistory">
                      <a className="nav-link">
                        <FontAwesomeIcon className="side" icon="history" style={{color: '#32e1ff'}}/>
                        Bus History
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register">
                      <a className="nav-link">
                        <FontAwesomeIcon className="side" icon="registered" style={{color: '#ff68d3'}}/>
                        Register
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default TestNav;