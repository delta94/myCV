import React, { Component } from 'react';
import ContentField from './../../ElementCV/ContentField/ContentField';
import {connect} from 'react-redux';
import SkillSection from './SkillSection';
import * as actions from './../../../actions/actionSkill';
import * as actionsCV from './../../../actions/info.action';
import uuidv1 from 'uuid';

var language = "";

class SkillSections extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      items : [],
      number : this.props.skill.length
    }
  }

  componentWillMount(){
    this.props.fetchAllSkill(this.props.idcv);
  }

  changeLanguage = (language) =>{
    if (language === "vi" )
    return ("KỸ NĂNG");
    else return ("SKILL");
  }

  shouldComponentUpdate(nextProps){
    language = nextProps.info.language;
    return true;
  }

  addNew = (number) =>{
    return {
        _id: uuidv1(),
        name : "TÊN KỸ NĂNG",
        number : 1,
        idcv: this.props.idcv
    }
  }

  render() {
    var items = this.props.skill;
    var {number} = this.state;
    return (
      <div className="Skill-Sections">
        <ContentField name ={ this.changeLanguage(language)}
          moveUp={(e)=>this.props.moveUpSkill('Skill', 'up', this.props.idcv)}
          moveDown={(e)=>this.props.moveDownSkill('Skill', 'down', this.props.idcv)} 
          addSection={(e)=>this.props.addSkill(this.addNew(number)) } >
          {
            items.map((item,index) => (
              <SkillSection key={index} deleteSection = {(e)=>this.props.deleteSkill(item._id)}  >{item}</SkillSection>
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
    skill : state.skill,
    idcv: state.idcv
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    fetchAllSkill : (idcv) =>{
      dispatch(actions.actFetchSkillRequest(idcv));
    },
    addSkill : (number) =>{
      dispatch(actions.actAddSkillRequest(number));
    },
    deleteSkill : (index) =>{
      dispatch(actions.actDeleteSkillRequest(index));
    },
    moveUpSkill : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    },
    moveDownSkill : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SkillSections);