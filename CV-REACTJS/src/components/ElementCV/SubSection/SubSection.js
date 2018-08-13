import React, { Component } from 'react';
import SubSectionAction from './../SubSectionAction/SubSectionAction';
import './SubSection.css';

class SubSection extends Component {
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
      return <SubSectionAction deleteSection={this.props.deleteSection} />
    }

  }

  render() {
    return (
      <div className="SubSection" onMouseOver={this.didHover} onMouseLeave={this.didLeave}>
        <div className="SubSection-wraper">
          {this.onHover()}
          {this.props.children}  
        </div>
      </div>
    );
  }
}

export default SubSection;
