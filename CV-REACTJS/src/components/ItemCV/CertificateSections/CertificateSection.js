import React, { Component } from 'react';
import SubSection from './../../ElementCV/SubSection/SubSection';
import InputField from './../../ElementCV/InputField/InputField';
import * as actions from './../../../actions/actionCertificate';
import {connect} from 'react-redux';

class CertificateSection extends Component {

  updateName = (data, id) =>{
    this.props.updateName(data, id)
  }

  updateDay = (data, id) =>{
    this.props.updateDay(data, id)
  }

  updateContent = (data, id) =>{
    this.props.updateContent(data, id)
  }

    render() {
      return (
        <SubSection deleteSection={this.props.deleteSection}>
        <div className="row">
            <div className="col-md-9">
            <InputField data={(data,id) => this.updateName(data, this.props.children._id)}>{this.props.children.name}</InputField>
            </div>
            <div className="col-md-3">
            <InputField data={(data,id) => this.updateDay(data, this.props.children._id)}>{this.props.children.day}</InputField>
            </div>
          </div>
          <InputField data={(data,id) => this.updateContent(data, this.props.children._id)}>{this.props.children.content}</InputField>
        </SubSection>
      );
    }
  }

  const mapDispatchToProps = (dispatch, props) =>{
    return{
      updateName : (text, id) =>{
        dispatch(actions.actUpdateNameCertificateRequest(text,id));
      },
      updateDay : (text, id) =>{
        dispatch(actions.actUpdateDayCertificateRequest(text,id));
      },
      updateContent : (text, id) =>{
        dispatch(actions.actUpdateContentCertificateRequest(text,id));
      }
    }
  }
  
  export default connect(null, mapDispatchToProps)(CertificateSection);