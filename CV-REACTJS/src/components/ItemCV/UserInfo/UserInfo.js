import React, { Component } from 'react';
import InputField from './../../ElementCV/InputField/InputField';
import * as actions from './../../../actions/info.action';
import {connect} from 'react-redux';

var day = "";
var phone = "";
var address = "";
var email = "";

class UserInfo extends Component {

  shouldComponentUpdate(nextProps){
    day = nextProps.info.day;
    phone = nextProps.info.phone;
    address = nextProps.info.address;
    email = nextProps.info.email;
    //console.log("day");
    return true;
  }
  componentWillMount(){
    this.props.fetchCV(1);
  }
  updateDay = (data, id) =>{
    this.props.updateDay(data, id)
  }
  updateAddress = (data, id) =>{
    this.props.updateAddress(data, id)
  }
  updatePhone = (data, id) =>{
    this.props.updatePhone(data, id)
  }
  updateEmail = (data, id) =>{
    this.props.updateEmail(data, id)
  }
  
  render() {
    return (
      <div className="UserInfo">
        <h4 className="section-header font-size-2">{this.props.name}</h4>
        <div className="BirthDay-info row">
          <i className="fas fa-birthday-cake"></i>
          <InputField data={(data, id) => this.updateDay(data,1)}>{day}</InputField>

        </div>

        <div className="Phonenumber-info row">
          <i className="fas fa-phone"></i>
          <InputField data={(data, id) => this.updatePhone(data,1)}>{phone}</InputField>

        </div>

        <div className="Location-info row">
          <i className="fas fa-map-marker-alt"></i>
          <InputField data={(data, id) => this.updateAddress(data,1)}>{address}</InputField>

        </div>
        
        <div className="Email-info row">
          <i className="fas fa-envelope"></i>
          <InputField data={(data, id) => this.updateEmail(data,1)}>{email}</InputField>

        </div>

      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    info : state.info
  }
}
const mapDispatchToProps = (dispatch, props) =>{
  return{
    fetchCV : (id) =>{
      dispatch(actions.actFetchCVRequest(id));
    },
    updateDay : (text,id) =>{
      dispatch(actions.actUpdateBirthDayRequest(text,id));
    },
    updateAddress : (text,id) =>{
      dispatch(actions.actUpdateAddressRequest(text,id));
    },
    updatePhone : (text,id) =>{
      dispatch(actions.actUpdateMyPhoneRequest(text,id));
    },
    updateEmail : (text,id) =>{
      dispatch(actions.actUpdateEmailRequest(text,id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
