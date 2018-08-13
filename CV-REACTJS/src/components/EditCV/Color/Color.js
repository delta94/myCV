import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../../../actions/info.action';
import './Color.css';

var cl = "";

class Color extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      color1 : "active-color",
      color2 : "c2",
      color3 : "c3",
      color4 : "c4",
      color5 : "c5"
    }
    
  }

  onActive = (e) =>{
    
    if( e === "color1")
    {
      this.setState({
        color1 : "active-color",
        color2 : "c2",
        color3 : "c3",
        color4 : "c4",
        color5 : "c5"
      });
      cl = "3ba469";
    }
    else if( e === "color2")
    {
      this.setState({
        color1 : "c1",
        color2 : "active-color",
        color3 : "c3",
        color4 : "c4",
        color5 : "c5"
      });
      cl = "556e8e";
    }
    else if( e === "color3")
    {
      this.setState({
        color1 : "c1",
        color2 : "c2",
        color3 : "active-color",
        color4 : "c4",
        color5 : "c5"
      });
      cl = "4286f4";
    }
    else if( e === "color4")
    {
      this.setState({
        color1 : "c1",
        color2 : "c2",
        color3 : "c3",
        color4 : "active-color",
        color5 : "c5"
      });
      cl = "fcc188";
    }
    else 
    {
      this.setState({
        color1 : "c1",
        color2 : "c2",
        color3 : "c3",
        color4 : "c4",
        color5 : "active-color"
      });
      cl = "95cd87";
    }
    this.props.changeColor(cl,1);    
  }

  render() {
    
    // {this.onActive(children)}
    return (
      <div className="Color">
        <label >Chọn màu CV</label>
            <div className="row">
              <div className="color-wraper">
                <span className={`check-color color1 ${this.state.color1}`} name="color1" onMouseDown={(color) => this.onActive("color1")}><i className={`fa fa-check ${this.state.color1}`} ></i></span>
              </div>
              <div className="color-wraper">
                <span className={`check-color color2 ${this.state.color2}`} name="color2" onMouseDown={(color) => this.onActive("color2")}><i className={`fa fa-check ${this.state.color2}`}></i></span>
              </div>
              <div className="color-wraper">
                <span className={`check-color color3 ${this.state.color3}`} name="color3" onMouseDown={(color) => this.onActive("color3")}><i className={`fa fa-check ${this.state.color3}`}></i></span>
              </div>
              <div className="color-wraper">
                <span className={`check-color color4 ${this.state.color4}`} name="color4" onMouseDown={(color) => this.onActive("color4")}><i className={`fa fa-check ${this.state.color4}`}></i></span>
              </div>
              <div className="color-wraper">
                <span className={`check-color color5 ${this.state.color5}`} name="color5" onMouseDown={(color) => this.onActive("color5")}><i className={`fa fa-check ${this.state.color5}`}></i></span>
              </div>
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
    changeColor : (cl,id) =>{
      dispatch(actions.actChangeColorRequest(cl,id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Color);