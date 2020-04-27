import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SingleToDo extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.todo}
          <Button variant="danger" onClick={this.props.delete}>Delete</Button></li>
      </div>
    );
  }
}

export default SingleToDo;