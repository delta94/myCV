import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../../../actions/info.action';

class SelectLanguage extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      vi : "active-lang",
      en : ""
    }
  }

  onActive = (lang) =>{
    if(lang === "en")
    {
      this.setState({
        en : "active-lang",
        vi : ""
      });
      this.props.changeLanguage("en",this.props.idcv);
    }
    else{
      this.setState({
        vi : "active-lang",
        en : ""
      });
      this.props.changeLanguage("vi", this.props.idcv);
    }
  }

  render() {
    return (
      <div className="SelectLanguage">
        <label >Ngôn ngữ</label>
            <img src="/images/en.jpg" alt="english" className={`img-thumbnail float-left ${this.state.en}`} onMouseDown={(lang)=>this.onActive("en")} />
            <img src="/images/vn.png" alt="vietnamese" className={`img-thumbnail float-right ${this.state.vi}`} onMouseDown={(lang)=>this.onActive("vn")} />
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
    changeLanguage : (la, id) =>{
      dispatch(actions.actChangeLanguageRequest(la,id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectLanguage);