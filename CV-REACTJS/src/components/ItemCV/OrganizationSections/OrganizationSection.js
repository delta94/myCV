import React, { Component } from 'react';
import SubSection from './../../ElementCV/SubSection/SubSection';
import InputField from './../../ElementCV/InputField/InputField';
import * as actions from './../../../actions/actionOrganization';
import {connect} from 'react-redux';

class OrganizationSection extends Component {

  updateName = (data, id) =>{
    this.props.updateName(data, id)
  }

  updateDayBegin = (data, id) =>{
    this.props.updateDayBegin(data, id)
  }

  updateDayEnd = (data, id) =>{
    this.props.updateDayEnd(data, id)
  }

  updateType = (data, id) =>{
    this.props.updateType(data, id)
  }

  updateBy = (data, id) =>{
    this.props.updateBy(data, id)
  }

    render() {
      return (
        <SubSection deleteSection={this.props.deleteSection}>
            <div className="row">
              <div className="col-md-7">
              <InputField data={(data,id) => this.updateName(data, this.props.children._id)}>{this.props.children.name}</InputField>
              </div>
              <div className="col-md-2">
              <InputField data={(data,id) => this.updateDayBegin(data, this.props.children._id)}>{this.props.children.daybegin}</InputField>
              </div>
              <div className="dot-to col-md-1"> - </div>
              <div className="col-md-2">
              <InputField data={(data,id) => this.updateDayEnd(data, this.props.children._id)}>{this.props.children.dayend}</InputField>
              </div>
            </div>
            <InputField data={(data,id) => this.updateType(data, this.props.children._id)} >{this.props.children.type}</InputField>
            <InputField data={(data,id) => this.updateBy(data, this.props.children._id)}>{this.props.children.by}</InputField>

        </SubSection>
      );
    }
  }
  const mapDispatchToProps = (dispatch, props) =>{
    return{
      updateName : (text, id) =>{
        dispatch(actions.actUpdateNameOrganizationRequest(text,id));
      },
      updateDayBegin : (text, id) =>{
        dispatch(actions.actUpdateDayBeginOrganizationRequest(text,id));
      },
      updateDayEnd : (text, id) =>{
        dispatch(actions.actUpdateDayEndOrganizationRequest(text,id));
      },
      updateType : (text, id) =>{
        dispatch(actions.actUpdateTypeOrganizationRequest(text,id));
      },
      updateBy : (text, id) =>{
        dispatch(actions.actUpdateByOrganizationRequest(text,id));
      }
    }
  }
  
    export default connect(null, mapDispatchToProps)(OrganizationSection);