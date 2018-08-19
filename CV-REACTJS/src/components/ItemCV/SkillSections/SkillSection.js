import React, { Component } from 'react';
import SubSection from './../../ElementCV/SubSection/SubSection';
import InputField from './../../ElementCV/InputField/InputField';
import SkillLevel from './../../ElementCV/SkillLevel/SkillLevel';
import * as actions from './../../../actions/actionSkill';
import {connect} from 'react-redux';

class SkillSection extends Component {

  updateName = (data, id) =>{
    this.props.updateName(data, id)
  }
  updateNumber = (data, id) =>{
    this.props.updateNumber(data, id)
  }

    render() {
      return (
        <SubSection deleteSection={this.props.deleteSection}>
            <InputField data={(data,id) => this.updateName(data, this.props.children._id)}>{this.props.children.name}</InputField>
            <SkillLevel data={(data,id)=> this.updateNumber(data,this.props.children._id)} level={this.props.children.number} />
          </SubSection>
      );
    }
  }
  const mapDispatchToProps = (dispatch, props) =>{
    return{
      updateName : (text, id) =>{
        dispatch(actions.actUpdateNameSkillRequest(text,id));
      },
      updateNumber : (text, id) =>{
        dispatch(actions.actUpdateNumberSkillRequest(text,id));
      }
    }
  }
  
  export default connect(null, mapDispatchToProps)(SkillSection);
