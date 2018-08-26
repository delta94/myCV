import React, { Component } from 'react';
import ContentField from './../../ElementCV/ContentField/ContentField';
import {connect} from 'react-redux';
import ProjectSection from './ProjectSection';
import * as actions from './../../../actions/actionProject';
import * as actionsCV from './../../../actions/info.action';
import uuidv1 from 'uuid';

var language = "";

class ProjectSections extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      items : [],
      number : this.props.project.length
    }
  }

  componentWillMount(){
    this.props.fetchAllProject(this.props.idcv);
  }

  changeLanguage = (language) =>{
    if (language === "vi" )
    return ("DỰ ÁN");
    else return ("PROJECT");
  }

  shouldComponentUpdate(nextProps){
    language = nextProps.info.language;
    return true;
  }

  addNew = (number) =>{
    return {
        _id: uuidv1(),
        name : "TÊN DỰ ÁN",
        daybegin : "Ngày Bắt Đầu",
        dayend : "Ngày Kết Thúc",
        type : "Loại Giải",
        by : "Cấp bởi tổ chức",
        idcv: this.props.idcv
    }
  }

  render() {
    var items = this.props.project;
    var {number} = this.state;
    return (
      <div className="Project-Sections">
        <ContentField name ={ this.changeLanguage(language)} 
          moveUp={(e)=>this.props.moveUpProject('Project', 'up', this.props.idcv)}
          moveDown={(e)=>this.props.moveDownProject('Project', 'down', this.props.idcv)}
          addSection={(e)=>this.props.addProject(this.addNew(number)) } >
          {
            items.map((item,index) => (
              <ProjectSection key={index} deleteSection = {(e)=>this.props.deleteProject(item._id)}  >{item}</ProjectSection>
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
    project : state.project,
    idcv: state.idcv
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    fetchAllProject : (idcv) =>{
      dispatch(actions.actFetchProjectRequest(idcv));
    },
    addProject : (number) =>{
      dispatch(actions.actAddProjectRequest(number));
    },
    deleteProject : (index) =>{
      dispatch(actions.actDeleteProjectRequest(index));
    },
    moveUpProject : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    },
    moveDownProject : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectSections);