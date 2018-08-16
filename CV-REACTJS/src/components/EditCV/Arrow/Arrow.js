import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../../../actions/info.action';

var ar = "";

class Arrow extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      a2 : "active-arrow",
      a4 : "",
      a6 : ""
    }
  }

  onActive = (arrow) =>{
    if(arrow === "a4")
    {
      this.setState({
        a4 : "active-arrow",
        a2 : "",
        a6 : ""
      });
      ar = "4";
    }
    else if(arrow === "a2")
    {
      this.setState({
        a2 : "active-arrow",
        a4 : "",
        a6 : ""
      });
      ar = "2"
    }
    else{
      this.setState({
        a6 : "active-arrow",
        a4 : "",
        a2 : ""
      });
      ar = "6"
    }
    this.props.changeArrow(ar,this.props.idcv);
  }

  render() {
    return (
      <div className="Arrow">
            <label>Khoảng cách</label><br />
            <span className={`arrows ${this.state.a2}`} onMouseDown={(arrow)=>this.onActive("a2")}><i className="fas fa-arrows-alt-v arrows-2"></i></span>
            <span className={`arrows ${this.state.a4}`} onMouseDown={(arrow)=>this.onActive("a4")}><i className="fas fa-arrows-alt-v arrows-4"></i></span>
            <span className={`arrows ${this.state.a6}`} onMouseDown={(arrow)=>this.onActive("a6")}><i className="fas fa-arrows-alt-v arrows-6"></i></span>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    idcv : state.idcv
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    changeArrow : (ar, id) =>{
      dispatch(actions.actChangeArrowRequest(ar,id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Arrow);
