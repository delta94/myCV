import React, { Component } from 'react';
import ContentField from './../../ElementCV/ContentField/ContentField';
import {connect} from 'react-redux';
import EducationSection from './EducationSection';
import * as actions from './../../../actions/actionEducation';
import uuidv1 from 'uuid';

var language = "";

class EducationSections extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      items : [],
      number : this.props.education.length
    }
  }

  componentWillMount(){
    this.props.fetchAllEducation(this.props.idcv);
  }

  shouldComponentUpdate(nextProps){
    language = nextProps.info.language;
    return true;
  }

  changeLanguage = (language) =>{
    if (language === "vi" )
    return ("HỌC VẤN");
    else return ("EDUCATION");
  }

  addNew = (number) =>{
    return {
        _id: uuidv1(),
        name : "TÊN HỌC VẤN",
        type : "Tên Ngành",
        description : "Mô Tả",
        idcv : this.props.idcv
    }
  }

  render() {
    var items = this.props.education;
    var {number} = this.state;

    return (
      <div className="Education-Sections">
        <ContentField name ={ this.changeLanguage(language)} addSection={(e)=>this.props.addEducation(this.addNew(number)) } >
          {
            items.map((item,index) => (
              <EducationSection key={index} deleteSection = {(e)=>this.props.deleteEducation(item._id)}>{item}</EducationSection>
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
    education : state.education,
    idcv: state.idcv
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    fetchAllEducation : (idcv) =>{
      dispatch(actions.actFetchEducationRequest(idcv));
    },
    addEducation : (number) =>{
      dispatch(actions.actAddEducationRequest(number));
    },
    deleteEducation : (index) =>{
      dispatch(actions.actDeleteEducationRequest(index));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EducationSections);