import React, { Component } from 'react';
import ContentField from './../../ElementCV/ContentField/ContentField';
import {connect} from 'react-redux';
import LanguageSection from './LanguageSection';
import * as actions from './../../../actions/actionLanguage';
import * as actionsCV from './../../../actions/info.action';
import uuidv1 from 'uuid';

var language = "";

class LanguageSections extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      items : [],
      number : this.props.language.length
    }
  }

  componentWillMount(){
    this.props.fetchAllLanguage(this.props.idcv);
  }

  shouldComponentUpdate(nextProps){
    language = nextProps.info.language;
    return true;
  }

  changeLanguage = (language) =>{
    if (language === "vi" )
    return ("NGÔN NGỮ");
    else return ("LANGUAGE");
  }

  addNew = (number) =>{
    return {
        _id: uuidv1(),
        name : "TÊN NGÔN NGỮ",
        skill : "Mức Độ",
        idcv: this.props.idcv
    }
  }

  render() {
    var items = this.props.language;
    var {number} = this.state;
    return (
      <div className="Language-Sections">
        <ContentField name ={ this.changeLanguage(language)} 
          moveUp={(e)=>this.props.moveUpLanguage('Language', 'up', this.props.idcv)}
          moveDown={(e)=>this.props.moveDownLanguage('Language', 'down', this.props.idcv)}
          addSection={(e)=>this.props.addLanguage(this.addNew(number)) } >
          {
            items.map((item,index) => (
              <LanguageSection key={index} deleteSection = {(e)=>this.props.deleteLanguage(item._id)}>{item}</LanguageSection>
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
    language : state.language,
    idcv: state.idcv
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    fetchAllLanguage : (idcv) =>{
      dispatch(actions.actFetchLanguageRequest(idcv));
    },
    addLanguage : (number) =>{
      dispatch(actions.actAddLanguageRequest(number));
    },
    deleteLanguage : (index) =>{
      dispatch(actions.actDeleteLanguageRequest(index));
    },
    moveUpLanguage : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    },
    moveDownLanguage : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LanguageSections);