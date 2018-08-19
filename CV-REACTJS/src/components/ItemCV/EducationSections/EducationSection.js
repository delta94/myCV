import React, { Component } from 'react';
import SubSection from './../../ElementCV/SubSection/SubSection';
import InputField from './../../ElementCV/InputField/InputField';
import * as actions from './../../../actions/actionEducation';
import {connect} from 'react-redux';

class EducationSection extends Component {

  updateName = (data, id) =>{
    this.props.updateName(data, id)
  }

  updateType = (data, id) =>{
    this.props.updateType(data, id)
  }

  updateDescription = (data, id) =>{
    this.props.updateDescription(data, id)
  }

    render() {
      return (
          <SubSection deleteSection={this.props.deleteSection}>
            <InputField data={(data,id) => this.updateName(data, this.props.children._id)}>{this.props.children.name}</InputField>
            <InputField data={(data,id) => this.updateType(data, this.props.children._id)} >{this.props.children.type}</InputField>
            <InputField data={(data,id) => this.updateDescription(data, this.props.children._id)}>{this.props.children.description}</InputField>
          </SubSection>
      );
    }
  }

  const mapDispatchToProps = (dispatch, props) =>{
    return{
      updateName : (text, id) =>{
        dispatch(actions.actUpdateNameEducationRequest(text,id));
      },
      updateType : (text, id) =>{
        dispatch(actions.actUpdateTypeEducationRequest(text,id));
      },
      updateDescription : (text, id) =>{
        dispatch(actions.actUpdateDescriptionEducationRequest(text,id));
      }
    }
  }
  
  export default connect(null, mapDispatchToProps)(EducationSection);