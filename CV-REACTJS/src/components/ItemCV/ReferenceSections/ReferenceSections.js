import React, { Component } from 'react';
import ContentField from './../../ElementCV/ContentField/ContentField';
import {connect} from 'react-redux';
import ReferenceSection from './ReferenceSection';
import * as actions from './../../../actions/actionReference';
import * as actionsCV from './../../../actions/info.action';
import uuidv1 from 'uuid';

var language = "";

class ReferenceSections extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      items : [],
      number : this.props.reference.length
    }
  }

  componentWillMount(){
    this.props.fetchAllReference(this.props.idcv);
  }

  changeLanguage = (language) =>{
    if (language === "vi" )
    return ("NGƯỜI THAM CHIẾU");
    else return ("REFENRENCE");
  }

  shouldComponentUpdate(nextProps){
    language = nextProps.info.language;
    return true;
  }

  addNew = (number) =>{
    return {
        _id: uuidv1(),
        name : "TÊN NGƯỜI THAM CHIẾU",
        day : "Ngày Cấp",
        type : "Số điện thoại",
        by : "email",
        idcv: this.props.idcv
    }
  }


  render() {
    var items = this.props.reference;
    var {number} = this.state;
    return (
      <div className="Reference-Sections">
        <ContentField name ={ this.changeLanguage(language)}
          moveUp={(e)=>this.props.moveUpReference('Reference', 'up', this.props.idcv)}
          moveDown={(e)=>this.props.moveDownReference('Reference', 'down', this.props.idcv)} 
          addSection={(e)=>this.props.addReference(this.addNew(number)) } >
          {
            items.map((item,index) => (
              <ReferenceSection key={index} deleteSection = {(e)=>this.props.deleteReference(item._id)}  >{item}</ReferenceSection>
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
    reference : state.reference,
    idcv: state.idcv
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    fetchAllReference : (idcv) =>{
      dispatch(actions.actFetchReferenceRequest(idcv));
    },
    addReference : (number) =>{
      dispatch(actions.actAddReferenceRequest(number));
    },
    deleteReference : (index) =>{
      dispatch(actions.actDeleteReferenceRequest(index));
    },
    moveUpReference : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    },
    moveDownReference : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReferenceSections);