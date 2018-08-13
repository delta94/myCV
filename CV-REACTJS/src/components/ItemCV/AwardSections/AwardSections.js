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
    this.props.fetchAllAward(idcv);
    return true;
  }

  componentDidMount(){
    //this.props.fetchAllAward(1);
  }

  changeLanguage = (language) =>{
    if (language === "vi" )
    return ("GIẢI THƯỞNG");
    else return ("AWARD");
  }

  addNew = (number) =>{
    return {
        id : number,
        name : "TÊN GIẢI THƯỞNG",
        day : "Ngày Cấp",
        type : "Loại Giải",
        by : "Cấp bởi tổ chức"
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
              <AwardSection key={index} deleteSection = {(e)=>this.props.deleteAward(item.id)}  >{item}</AwardSection>
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
    award : state.award
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