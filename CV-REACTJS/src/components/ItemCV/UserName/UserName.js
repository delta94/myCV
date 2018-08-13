import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../../../actions/info.action';

var name = "";
var choose = "";

class UserName extends Component {
  onInputName = (e)=>{
    this.props.updateName(this.txtName.textContent,1);
  }
  onInputChoose = (e)=>{
    this.props.updateChoose(this.txtChoose.textContent,1);
  }
  shouldComponentUpdate(nextProps){
    name = nextProps.info.name;
    choose = nextProps.info.choose;
    //console.log(this.props.info);
    return true;
  }
  componentWillMount(){
    this.props.fetchCV(1);
  }
  render() {
    return (
      <div className="UserName">
        <div ref={(input)=>{this.txtName = input}} onBlur={this.onInputName}  value={name}
         style={{fontSize : "30px"}} content-placeholder={"HỌ VÀ TÊN"} className={`InputField user-name`}  contenteditable="true" content-required-message="'Họ và Tên' không được để trống" >
        {name}
        </div>
        <div ref={(input)=>{this.txtChoose = input}} onBlur={this.onInputChoose}  value={choose}
        style={{fontSize : "20px"}} content-placeholder={"Vị Trí Ứng Tuyển"} className={`InputField user-name`}  contenteditable="true" content-required-message="'Họ và Tên' không được để trống" >
        {choose}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    info : state.info,
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    fetchCV : (id) =>{
      dispatch(actions.actFetchCVRequest(id));
    },
    updateName : (text, id) =>{
      dispatch(actions.actUpdateNameRequest(text,id));
    },
    updateChoose : (text, id) =>{
      dispatch(actions.actUpdateChooseRequest(text,id));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserName);