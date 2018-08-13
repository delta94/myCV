import React, { Component } from 'react';
import "./SubSectionAction.css";

class SubSectionAction extends Component {
  render() {
    return (
      <div className="SubSectionAction row">
        <div className=" SubSectionAction-wraper">
            <i className="fas fa-caret-up sub-action"></i>
        </div>
        <div className=" SubSectionAction-wraper">
            <i className="fas fa-caret-down sub-action"></i>
        </div>
        <div className="SubSectionAction-wraper-b" >
            <i className="fas fa-trash-alt sub-action" onMouseDown={this.props.deleteSection} ></i>
        </div>
      </div>
    );
  }
}

export default SubSectionAction;
