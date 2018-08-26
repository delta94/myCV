import React, { Component } from 'react';
import ContentField from './../../ElementCV/ContentField/ContentField';
import {connect} from 'react-redux';
import OrganizationSection from './OrganizationSection';
import * as actions from './../../../actions/actionOrganization';
import * as actionsCV from './../../../actions/info.action';
import uuidv1 from 'uuid';

var language = "";

class OrganizationSections extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      items : [],
      number : this.props.organization.length
    }
  }

  componentWillMount(){
    this.props.fetchAllOrganization(this.props.idcv);
  }

  shouldComponentUpdate(nextProps){
    language = nextProps.info.language;
    return true;
  }
  changeLanguage = (language) =>{
    if (language === "vi" )
    return ("HOẠT ĐỘNG");
    else return ("ORGANIZATION");
  }

  addNew = (number) =>{
    return {
        _id: uuidv1(),
        name : "TÊN TỔ CHỨC",
        daybegin : "Ngày Bắt Đầu",
        dayend : "Ngày Kết Thúc",
        type : "Loại Giải",
        by : "Cấp bởi tổ chức",
        idcv: this.props.idcv
    }
  }


  render() {
    var items = this.props.organization;
    var {number} = this.state;
    return (
      <div className="Organization-Sections">
        <div className="Organization-Sections">
        <ContentField name ={ this.changeLanguage(language)} 
          moveUp={(e)=>this.props.moveUpOrganization('Organization', 'up', this.props.idcv)}
          moveDown={(e)=>this.props.moveDownOrganization('Organization', 'down', this.props.idcv)}
          addSection={(e)=>this.props.addOrganization(this.addNew(number)) }
          hidden={(e)=>this.props.hidenOrganization('Organization', this.props.idcv)} >
          {
            items.map((item,index) => (
              <OrganizationSection key={index} deleteSection = {(e)=>this.props.deleteOrganization(item._id)}  >{item}</OrganizationSection>
            ))
          }
        </ContentField>
      </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    info : state.info,
    organization : state.organization,
    idcv: state.idcv
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    fetchAllOrganization : (idcv) =>{
      dispatch(actions.actFetchOrganizationRequest(idcv));
    },
    addOrganization : (number) =>{
      dispatch(actions.actAddOrganizationRequest(number));
    },
    deleteOrganization : (index) =>{
      dispatch(actions.actDeleteOrganizationRequest(index));
    },
    moveUpOrganization : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    },
    moveDownOrganization : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    },
    hidenOrganization : (name, idcv) =>{
      dispatch(actionsCV.actHiddenComponent(name, idcv));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrganizationSections);