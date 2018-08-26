import React, { Component } from 'react';
import ContentField from './../../ElementCV/ContentField/ContentField';
import {connect} from 'react-redux';
import SocialSection from './SocialSection';
import * as actions from './../../../actions/actionSocial';
import * as actionsCV from './../../../actions/info.action';
import uuidv1 from 'uuid';

var language = "";

class SocialSections extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      items : [],
      number : this.props.social.length
    }
  }

  shouldComponentUpdate(nextProps){
    language = nextProps.info.language;
    return true;
  }
  componentWillMount(){
    this.props.fetchAllSocial(this.props.idcv);
  }

  addNew = (number) =>{
    return {
        _id: uuidv1(),
        name : "TÊN TÀI KHOẢN",
        idcv: this.props.idcv
    }
  }

  changeLanguage = (language) =>{
    if (language === "vi" )
    return ("MẠNG XÃ HỘI");
    else return ("SOCIAL");
  }

  render() {
    var items = this.props.social;
    var {number} = this.state;
    return (
      <div className="Social-Sections">
        <ContentField name ={ this.changeLanguage(language)}
          moveUp={(e)=>this.props.moveUpSocial('Social', 'up', this.props.idcv)}
          moveDown={(e)=>this.props.moveDownSocial('Social', 'down', this.props.idcv)} 
          addSection={(e)=>this.props.addSocial(this.addNew(number)) }
          hidden={(e)=>this.props.hidenSocial('Social', this.props.idcv)} >
          {
            items.map((item,index) => (
              <SocialSection key={index} deleteSection = {(e)=>this.props.deleteSocial(item._id)}  >{item}</SocialSection>
            ))
          }
        </ContentField>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    info : state.info,
    social : state.social,
    idcv: state.idcv
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    fetchAllSocial : (idcv) =>{
      dispatch(actions.actFetchSocialRequest(idcv));
    },
    addSocial : (number) =>{
      dispatch(actions.actAddSocialRequest(number));
    },
    deleteSocial : (index) =>{
      dispatch(actions.actDeleteSocialRequest(index));
    },
    moveUpSocial : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    },
    moveDownSocial : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    },
    hidenSocial : (name, idcv) =>{
      dispatch(actionsCV.actHiddenComponent(name, idcv));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SocialSections);