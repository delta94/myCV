import React, { Component } from 'react';
import './SectionAction.css';

class SectionAction extends Component {
  render() {
    return (
      <div className="SectionAction row">
        <div className="SectionAction-wraper" onMouseDown={this.props.moveUp}>
            <i className="fas fa-caret-up section-action" ></i>
        </div>
        <div className="SectionAction-wraper" onMouseDown={this.props.moveDown}>
            <i className="fas fa-caret-down section-action" ></i>
        </div>
        <div className="SectionAction-wraper">
            <div className="AddSectionAction section-action" onMouseDown={this.props.addSection }  >
              <i className="fa fa-plus" ></i>
            </div>
        </div>
        <div className="SectionAction-wraper-b">
            <div className="AddSectionAction section-action " onMouseDown={this.props.hidden}>
              <i className="fa fa-eye-slash" ></i>
            </div>
        </div>
      </div>
    );
  }
}

export default SectionAction;