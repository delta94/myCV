import React, { Component } from 'react';
import Avatar from './../ElementCV/Avatar/Avatar';
// import Education from './../ItemCV/EducationSections/EducationSections';
// import Socials from './../ItemCV/SocialSections/SocialSections';
import UserInfo from './../ItemCV/UserInfo/UserInfo';
// import Objective from './../ItemCV/ObjectiveSections/ObjectiveSections';
import InputField from './../ElementCV/InputField/InputField';
import UserName from './../ItemCV/UserName/UserName';
// import Project from './../ItemCV/ProjectSections/ProjectSections';
import Award from './../ItemCV/AwardSections/AwardSections';
// import Certificate from './../ItemCV/CertificateSections/CertificateSections';
// import Language from './../ItemCV/LanguageSections/LanguageSections';
// import Organization from './../ItemCV/OrganizationSections/OrganizationSections';
// import Reference from './../ItemCV/ReferenceSections/ReferenceSections';
// import Skill from './../ItemCV/SkillSections/SkillSections';
import './ModelCV.css';
import {connect} from 'react-redux';
import * as actions from './../../actions/info.action';

var bgColors = "";
var nameCV = "";
var idcv = null;

class ModelCV extends Component {


  updateName = (data, id) =>{
    this.props.updateName(data, id)
  }
  shouldComponentUpdate(nextProps){
    //console.log(nextProps);
    bgColors = "#"+ nextProps.info.color ;
    nameCV = nextProps.info.namecv ;
    idcv = nextProps.info._id;
    this.props.fetchCV(idcv);
    return true;
  }
  componentWillMount(){
    //this.props.fetchCV(1);
  }

  render() {
    
    return (
      <div className="ModelCV container" >
        <InputField data={(data,id) => this.updateName(data, idcv)}>{nameCV}</InputField>
        <div className="ModelCV-Wraper">
          <div className="CV-Header row" style = {{backgroundColor : bgColors  }} >
            <Avatar />
            <UserName />
            <UserInfo name="" />
          </div>
          <div className="CV-main">
            <Award />
            {/* <Skill />
            <Education />
            <Objective />
            <Socials />
            <Project />
            <Certificate />
            <Language />
            <Organization />
            <Reference /> */}
          </div>
        </div>
      </div>
    );
    //this.componentDidMount();
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
    updateName : (text, id) =>{
      dispatch(actions.actUpdateNameCVRequest(text,id));
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ModelCV);