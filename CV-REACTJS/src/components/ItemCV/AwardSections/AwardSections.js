import React, { Component } from 'react';
import ContentField from './../../ElementCV/ContentField/ContentField';
import {connect} from 'react-redux';
import AwardSection from './AwardSection';
import * as actions from './../../../actions/actionAward';

var language = "";
var idcv = null;

class AwardSections extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      items : [],
      number : this.props.award.length
    }
  }

  shouldComponentUpdate(nextProps){
    language = nextProps.info.language;
    idcv = nextProps.info._id;
    //this.props.fetchAllAward(idcv);
    return true;
  }

  componentWillMount(){
    this.props.fetchAllAward(this.props.idcv);
  }

  changeLanguage = (language) =>{
    if (language === "vi" )
    return ("GIẢI THƯỞNG");
    else return ("AWARD");
  }

  addNew = (number) =>{
    return {
        name : "TÊN GIẢI THƯỞNG",
        day : "Ngày Cấp",
        type : "Loại Giải",
        by : "Cấp bởi tổ chức",
        idcv: this.props.idcv
    }
  }

  render() {
    var items = this.props.award;
    var {number} = this.state;
    
    return (
      <div className="Award-Sections">
        <ContentField name ={ this.changeLanguage(language)} addSection={(e)=>this.props.addAward(this.addNew(number)) } >
          {
            items.map((item,index) => (
              <AwardSection key={index} deleteSection = {(e)=>this.props.deleteAward(item._id)}  >{item}</AwardSection>
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
    award : state.award,
    idcv: state.idcv
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    fetchAllAward : (idcv) =>{
      dispatch(actions.actFetchAwardRequest(idcv));
    },
    addAward : (number) =>{
      dispatch(actions.actAddAwardRequest(number));
    },
    deleteAward : (index) =>{
      dispatch(actions.actDeleteAwardRequest(index));
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(AwardSections);