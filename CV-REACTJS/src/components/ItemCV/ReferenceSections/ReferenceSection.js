import React, { Component } from 'react';
import SubSection from './../../ElementCV/SubSection/SubSection';
import InputField from './../../ElementCV/InputField/InputField';
import * as actions from './../../../actions/actionReference';
import {connect} from 'react-redux'

class ReferenceSection extends Component {

  updateName = (data, id) =>{
    this.props.updateName(data, id)
  }

  updateDay = (data, id) =>{
    this.props.updateDay(data, id)
  }

  updatePhone = (data, id) =>{
    this.props.updatePhone(data, id)
  }

  updateEmail = (data, id) =>{
    this.props.updateEmail(data, id)
  }

    render() {
      return (
        <SubSection deleteSection={this.props.deleteSection}>
            <InputField data={(data,id) => this.updateName(data, this.props.children._id)}>{this.props.children.name}</InputField>
            <InputField data={(data,id) => this.updateDay(data, this.props.children._id)}>{this.props.children.day}</InputField>
            <div className="row">
              <div className="col-md-6 row">
                <div className="col-md-3">
                  <label><i className="fas fa-phone"></i></label>
                </div>
                <div className="col-md-9">
                  <InputField data={(data,id) => this.updatePhone(data, this.props.children._id)} >{this.props.children.type}</InputField>
                </div>
              </div>
              <div className="col-md-6 row">
                <div className="col-md-3">
                  <label><i className="fas fa-envelope"></i></label>
                </div>
                <div className="col-md-9">
                  <InputField data={(data,id) => this.updateEmail(data, this.props.children._id)}>{this.props.children.by}</InputField>
                </div>
              </div>
            </div>
          </SubSection>
      );
    }
  }

  const mapDispatchToProps = (dispatch, props) =>{
    return{
      updateName : (text, id) =>{
        dispatch(actions.actUpdateNameReferenceRequest(text,id));
      },
      updateDay : (text, id) =>{
        dispatch(actions.actUpdateDayReferenceRequest(text,id));
      },
      updatePhone : (text, id) =>{
        dispatch(actions.actUpdatePhoneReferenceRequest(text,id));
      },
      updateEmail : (text, id) =>{
        dispatch(actions.actUpdateEmailReferenceRequest(text,id));
      }
    }
  }
  
    export default connect(null, mapDispatchToProps)(ReferenceSection);