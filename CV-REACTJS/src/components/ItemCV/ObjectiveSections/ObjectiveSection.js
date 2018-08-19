import React, { Component } from 'react';
import SubSection from './../../ElementCV/SubSection/SubSection';
import InputField from './../../ElementCV/InputField/InputField';
import * as actions from './../../../actions/actionObjective';
import {connect} from 'react-redux';

class ObjectiveSection extends Component {

  updateName = (data, id) =>{
    this.props.updateName(data, id)
  }

    render() {
      return (
        <SubSection deleteSection={this.props.deleteSection}>
          <InputField data={(data,id) => this.updateName(data, this.props.children._id)}>{this.props.children.name}</InputField>
        </SubSection>
      );
    }
  }

  const mapDispatchToProps = (dispatch, props) =>{
    return{
      updateName : (text, id) =>{
        dispatch(actions.actUpdateNameObjectiveRequest(text,id));
      }
    }
  }
  
    export default connect(null, mapDispatchToProps)(ObjectiveSection);