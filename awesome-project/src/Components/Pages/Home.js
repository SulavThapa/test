import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import NewAdmin from './Admin';

//for login
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Home extends Component {
    constructor() {
        super();
        this.state= {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/admin");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/admin");
        }
    
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault();

        const usersData = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(usersData);
    }
    
    // try = () => {
    //     this.props.history.push('/admin');
    // };
    render() {
        const { errors } = this.state;

        return (
              <div>
                  <Card className='mx-auto shadow' bg="dark" text="white" style={{ marginTop: "13%",width: '22rem', height: '20rem', padding: 25 }}>
                      <h1 className='new' style={{color: '#b6c8c6', fontFamily: 'monospace'}}>Login Here</h1>
                      <Form noValidate onSubmit={this.handleSubmit}>
                          <Form.Group controlId="formBasicEmail">
                              <Form.Label><span style={{color: '#b6c8c6', fontFamily: 'monospace', padding: 40}}>Email</span></Form.Label>
                              <input type="email"
                               placeholder="Email" 
                               value={this.state.email} 
                               error={errors.email}
                               id="email" 
                               onChange={this.handleChange}
                               className={classnames("form-control", {
                                invalid: errors.email || errors.emailnotfound
                              })}
                               />
                                <span style={{color: 'red'}}>
                                    {errors.email}
                                    {errors.emailnotfound}
                                </span>
                              <Form.Text className="text-muted"></Form.Text>
                          </Form.Group>
                          <Form.Group controlId="formBasicPassword">
                              <Form.Label><span style={{color: '#b6c8c6', fontFamily: 'monospace', padding: 30}}>Password</span></Form.Label>
                              <input type="password"
                               placeholder="Password" 
                               value={this.state.password}
                               error={errors.password} 
                               id="password" 
                               onChange={this.handleChange}
                               className={classnames("form-control", {
                                invalid: errors.password || errors.passwordincorrect
                              })}
                               />
                               <span style={{color: 'red'}}>
                                    {errors.password}
                                    {errors.passwordincorrect}
                                </span>
                          </Form.Group>
                          <Button variant="primary" type="submit">
                              Submit
                          </Button>
                          <Route path="/admin" component={NewAdmin}/>
                      </Form>
                  </Card>
              </div>
        );

    };
}

Home.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { loginUser }
  )(Home);