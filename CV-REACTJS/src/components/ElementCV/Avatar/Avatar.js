import React, { Component } from 'react';
import './Avatar.css';

class Avatar extends Component {

  render() {
    return (
      <div className="Avatar" >
        <div type="file" className="Avatar-button">
          <div className="Avatar-button-i">
            <i className="fas fa-camera fa-3x" type="file"></i>
          </div>
          <div className="Avatar-button-input">
            <input type="file" className="custom-file-input" />
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;