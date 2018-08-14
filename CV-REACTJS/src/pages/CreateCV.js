import React, { Component } from 'react';
import EditCV from './../components/EditCV/EditCV';
import ModelCV from './../components/ModelCV/ModelCV';

class CreateCV extends Component {
  componentDidMount(){
    this.getQueryParams(window.location.href)
  }
  getQueryParams(qs) {
    var re = /\w+\b/g;
    var result = re[Symbol.match](qs);
    return result[4];
  }
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
