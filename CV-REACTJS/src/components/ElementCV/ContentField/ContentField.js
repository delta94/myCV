import React, { Component } from 'react';
import SectionAction from './../SectionAction/SectionAction';
import './ContentField.css';

class ContentField extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      disable : true
    } 
  }
  
  didHover = () =>{
    this.setState({
      disable : false
    });
    
  }

  didLeave = () =>{
    this.setState({ 
      disable : true
    });
  }

  onHover = () =>{
    if (this.state.disable === false)
    {
      return <SectionAction addSection={this.props.addSection } 
        moveUp={this.props.moveUp}
        moveDown={this.props.moveDown}
      />
    }

  }

  render() {
    return (
      <div className="ContentField" onMouseOver={this.didHover} onMouseLeave={this.didLeave}>
        <div className="ContentField-wraper">
          {this.onHover()}
          <h4 className="section-header font-size-2">{this.props.name}</h4>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ContentField;