import React, { Component } from 'react';
import TypesCV from './../TypesCV/TypesCV';
import './ShowCV.css';

class ShowCV extends Component {
  render() {
    return (
      <div className="showCV container-fluid">
        <div className="row">
          <TypesCV />
          <TypesCV />
          <TypesCV />
          <TypesCV />
          <TypesCV />
        </div>
      </div>

    );
  }
}

export default ShowCV;
