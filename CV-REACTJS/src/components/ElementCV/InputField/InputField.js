import React, { Component } from 'react';
import './InputField.css';
import {connect} from 'react-redux';
import * as actions from './../../../actions/info.action';


var size = "";
var arrow = "";
var font = "";

class InputField extends Component {

  onInput = (e)=>{
    this.props.data(this.txtName.textContent);
  }
  
  shouldComponentUpdate(nextProps){
    size = nextProps.info.size  +"px";
    arrow = nextProps.info.arrow + "px";
    font = nextProps.info.font;
    //console.log(this.props.info);
    return true;
  }
  componentWillMount(){
    this.props.fetchCV(1);
  }

  render() {
    var name = this.props.children;
    return (
      <div ref={(input)=>{this.txtName = input}} style={{fontSize : size, marginBottom : arrow, fontFamily: font}} 
      onBlur={this.onInput}  value={name} className={`InputField ${this.props.class}`}  contenteditable="true" content-required-message="'Kỹ năng' không được để trống" >
        {name}
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
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(InputField);