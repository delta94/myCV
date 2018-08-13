import React, { Component } from 'react';
import EditCV from './../components/EditCV/EditCV';
import ModelCV from './../components/ModelCV/ModelCV';

class CreateCV extends Component {
  render() {
    return (
      <div>
        <EditCV />
        <ModelCV />
      </div>
    );
  }
}

export default CreateCV;
