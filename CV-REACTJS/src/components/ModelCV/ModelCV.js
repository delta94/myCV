import React, { Component } from 'react';
import Avatar from './../ElementCV/Avatar/Avatar';
import Education from './../ItemCV/EducationSections/EducationSections';
import Socials from './../ItemCV/SocialSections/SocialSections';
import UserInfo from './../ItemCV/UserInfo/UserInfo';
import Objective from './../ItemCV/ObjectiveSections/ObjectiveSections';
import InputField from './../ElementCV/InputField/InputField';
import UserName from './../ItemCV/UserName/UserName';
import Project from './../ItemCV/ProjectSections/ProjectSections';
import Award from './../ItemCV/AwardSections/AwardSections';
import Certificate from './../ItemCV/CertificateSections/CertificateSections';
import Language from './../ItemCV/LanguageSections/LanguageSections';
import Organization from './../ItemCV/OrganizationSections/OrganizationSections';
import Reference from './../ItemCV/ReferenceSections/ReferenceSections';
import Skill from './../ItemCV/SkillSections/SkillSections';
import './ModelCV.css';
import {connect} from 'react-redux';
import * as actions from './../../actions/info.action';

var bgColors = "";
var nameCV = "";
var idcv = null;
var items = [];
var components = [];

function changeToComponent(name){
  switch (name) {
    case 'Education':
      return <Education />
    case 'Award':
      return <Award />
    case 'Certificate':
      return <Certificate />
    case 'Language':
      return <Language />
    case 'Objective':
      return <Objective />
    case 'Organization':
      return <Organization />
    case 'Project':
      return <Project />
    case 'Reference':
      return <Reference />
    case 'Skill':
      return <Skill />
    default:
      return <Socials />
  }
}

class ModelCV extends Component {

  updateName = (data, id) =>{
    this.props.updateName(data, id)
  }
  componentWillReceiveProps(nextProps){
    //console.log(nextProps);
    bgColors = "#"+ nextProps.info.color ;
    nameCV = nextProps.info.namecv ;
    items = nextProps.info.listComponent;
    components = [];
    items.forEach(e=>{
      components = [...components, changeToComponent(e)]
    });
  }
  componentWillMount(){
    this.props.fetchCV(this.props.idcv);
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
            { components.map((item, index) =>
              <div key={index}>
                {item}
              </div>
            ) }
          </div>
        </div>
      </div>
    );
    //this.componentDidMount();
  }
}

const mapStateToProps = (state) =>{
  return {
    info : state.info,
    idcv : state.idcv,
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    fetchCV : (id) =>{
      dispatch(actions.actFetchCVRequest(id));
      dispatch(actions.actAllListComponent(id));
    },
    updateName : (text, id) =>{
      dispatch(actions.actUpdateNameCVRequest(text,id));
    },

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ModelCV);