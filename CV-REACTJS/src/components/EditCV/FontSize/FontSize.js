import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../../../actions/info.action';

var sz = "";

class FontSize extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      a2 : "active-size",
      a4 : "",
      a6 : ""
    }
  }

  onActive = (size) =>{
    if(size === "16")
    {
      this.setState({
        a4 : "active-size",
        a2 : "",
        a6 : ""
      });
      sz = "16"
    }
    else if(size === "14")
    {
      this.setState({
        a2 : "active-size",
        a4 : "",
        a6 : ""
      });
      sz = "14"
    }
    else{
      this.setState({
        a6 : "active-size",
        a4 : "",
        a2 : ""
      });
      sz = "18"
    }
    this.props.changeSize(sz,this.props.id);
  }

  render() {
    return (
      <div className="FontSize">
        <label>Cỡ chữ</label><br />
            <span className={`size ${this.state.a2}`} onClick={(size)=>this.onActive("14")}><i className="fas fa-font size-12"></i></span>
            <span className={`size ${this.state.a4}`} onClick={(size)=>this.onActive("16")}><i className="fas fa-font size-14"></i></span>
            <span className={`size ${this.state.a6}`} onClick={(size)=>this.onActive("18")}><i className="fas fa-font size-16"></i></span>
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
    changeSize : (sz,id) =>{
      dispatch(actions.actChangeSizeRequest(sz, id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FontSize);