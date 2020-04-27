import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import TestNav from "../NavBar/testNav";
import {Card, Button} from "react-bootstrap";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        const { errors } = this.state;

        return (
            <React.Fragment>
                <TestNav />
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div
                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h2 className="text-muted" style={{left: '3%', marginTop: '1%'}}>Register New Admin</h2>
                    </div>
                    <Card className="h-75 d-inline-block shadow-sm" style={{height: '100%', width: '100%', padding: '1%'}}>
                        <div>
                    <div className="container">
                        <div className="row">

                            <div className="col s8 offset-s2" >
                                <form noValidate onSubmit={this.onSubmit}>
                                    <div className="input-field col s12">
                                        <label htmlFor="name" style={{fontFamily: 'monospace', fontSize: '18px'}}>Name</label>
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.name}
                                            error={errors.name}
                                            id="name"
                                            type="text"
                                            className={classnames("form-control", {
                                                invalid: errors.name
                                            })}
                                        />
                                        <span style={{color: 'red'}}>{errors.name}</span>
                                    </div>
                                    <div className="input-field col s12">
                                        <label htmlFor="email" style={{fontFamily: 'monospace', fontSize: '18px'}}>Email</label>
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            error={errors.email}
                                            id="email"
                                            type="email"
                                            className={classnames("form-control", {
                                                invalid: errors.email
                                            })}
                                        />
                                        <span style={{color: 'red'}}>{errors.email}</span>
                                    </div>
                                    <div className="input-field col s12">
                                        <label htmlFor="password" style={{fontFamily: 'monospace', fontSize: '18px'}}>Password</label>
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            error={errors.password}
                                            id="password"
                                            type="password"
                                            className={classnames("form-control", {
                                                invalid: errors.password
                                            })}
                                        />
                                        <span style={{color: 'red'}}>{errors.password}</span>
                                    </div>
                                    <div className="input-field col s12">
                                        <label htmlFor="password2" style={{fontFamily: 'monospace', fontSize: '18px'}}>Confirm Password</label>
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.password2}
                                            error={errors.password2}
                                            id="password2"
                                            type="password"
                                            className={classnames("form-control", {
                                                invalid: errors.password2
                                            })}
                                        />
                                        <span style={{color: 'red'}}>{errors.password2}</span>
                                    </div>
                                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                        <Button variant="primary"
                                            style={{
                                                width: "150px",
                                                borderRadius: "3px",
                                                letterSpacing: "1.5px",
                                                marginTop: "1rem"
                                            }}
                                            type="submit"
                                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                        >
                                            Sign up
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                    </Card>
                </main>
            </React.Fragment>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
