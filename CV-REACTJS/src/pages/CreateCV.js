import React, { Component } from 'react';
import EditCV from './../components/EditCV/EditCV';
import ModelCV from './../components/ModelCV/ModelCV';

class CreateCV extends Component {
  componentDidMount(){
    //console.log("props",this.props)
  }
  render() {
    console.log("props",this.props)
    return (
      <div>
        <EditCV />
        <ModelCV />
      </div>
    );
  }
}

export default CreateCV;
