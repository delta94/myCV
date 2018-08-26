import React, { Component } from 'react';
import ContentField from './../../ElementCV/ContentField/ContentField';
import {connect} from 'react-redux';
import ObjectiveSection from './ObjectiveSection';
import * as actions from './../../../actions/actionObjective';
import * as actionsCV from './../../../actions/info.action';
import uuidv1 from 'uuid';

var language = "";

class ObjectiveSections extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      items : [],
      number : this.props.objective.length
    }
  }

  componentWillMount(){
    this.props.fetchAllObjective(this.props.idcv);
  }

  addNew = (number) =>{
    return {
        _id: uuidv1(),
        name : "Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu biết về thị trường để trở thành một nhân viên bán hàng chuyên nghiệp, mang đến nhiều giá trị cho khách hàng. Từ đó giúp Công ty tăng số lượng khách hàng và mở rộng tập khách hàng.",
        idcv: this.props.idcv
    }
  }

  shouldComponentUpdate(nextProps){
    language = nextProps.info.language;
    return true;
  }

  changeLanguage = (info) =>{
    if (info === "vi" )
    return ("MỤC TIÊU NGHỀ NGHIỆP");
    else return ("OBJECTIVE");
  }

  render() {
    var items = this.props.objective;
    var {number} = this.state;
    return (
      <div className="Objective-Sections">
        <ContentField name ={ this.changeLanguage(language)} 
          moveUp={(e)=>this.props.moveUpObjective('Objective', 'up', this.props.idcv)}
          moveDown={(e)=>this.props.moveDownObjective('Objective', 'down', this.props.idcv)}
          addSection={(e)=>this.props.addObjective(this.addNew(number)) }
          hidden={(e)=>this.props.hidenObjective('Objective', this.props.idcv)} >
          {
            items.map((item,index) => (
              <ObjectiveSection key={index} deleteSection = {(e)=>this.props.deleteObjective(item._id)}  >{item}</ObjectiveSection>
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
    objective : state.objective,
    idcv: state.idcv
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    fetchAllObjective : (idcv) =>{
      dispatch(actions.actFetchObjectiveRequest(idcv));
    },
    addObjective : (number) =>{
      dispatch(actions.actAddObjectiveRequest(number));
    },
    deleteObjective : (index) =>{
      dispatch(actions.actDeleteObjectiveRequest(index));
    },
    moveUpObjective : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    },
    moveDownObjective : (name, direction, idcv) =>{
      dispatch(actionsCV.actUpdateListComponent(name, direction, idcv));
    },
    hidenObjective : (name, idcv) =>{
      dispatch(actionsCV.actHiddenComponent(name, idcv));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ObjectiveSections);