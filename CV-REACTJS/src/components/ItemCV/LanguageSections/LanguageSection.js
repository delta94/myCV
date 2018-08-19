import React, { Component } from 'react';
import SubSection from './../../ElementCV/SubSection/SubSection';
import InputField from './../../ElementCV/InputField/InputField';
import * as actions from './../../../actions/actionLanguage';
import {connect} from 'react-redux';

class LanguageSection extends Component {

  updateName = (data, id) =>{
    this.props.updateName(data, id)
  }

  updateSkill = (data, id) =>{
    this.props.updateSkill(data, id)
  }


    render() {
      return (
        <SubSection deleteSection={this.props.deleteSection}>
          <InputField data={(data,id) => this.updateName(data, this.props.children._id)}>{this.props.children.name}</InputField>
          <InputField data={(data,id) => this.updateSkill(data, this.props.children._id)}>{this.props.children.skill}</InputField>
      </SubSection>
      );
    }
  }

  const mapDispatchToProps = (dispatch, props) =>{
    return{
      updateName : (text, id) =>{
        dispatch(actions.actUpdateNameLanguageRequest(text,id));
      },
      updateSkill : (text, id) =>{
        dispatch(actions.actUpdateSkillLanguageRequest(text,id));
      }
    }
  }
  
    export default connect(null, mapDispatchToProps)(LanguageSection);