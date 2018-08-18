import React, { Component } from 'react';
import SubSection from './../../ElementCV/SubSection/SubSection';
import InputField from './../../ElementCV/InputField/InputField';
import * as actions from './../../../actions/actionAward';
import {connect} from 'react-redux';

class AwardSection extends Component {

  updateName = (data, id) =>{
    this.props.updateName(data, id)
  }

  updateDay = (data, id) =>{
    this.props.updateDay(data, id)
  }

  updateType = (data, id) =>{
    this.props.updateType(data, id)
  }

  updateBy = (data, id) =>{
    this.props.updateBy(data, id)
  }

  render() {
    //console.log(this.props.children)
    return (
        <SubSection deleteSection={this.props.deleteSection}>
            <div className="row">
              <div className="col-md-9">
                <InputField data={(data,id) => this.updateName(data, this.props.children._id)}>{this.props.children.name}</InputField>
              </div>
              <div className="col-md-3">
                <InputField data={(data,id) => this.updateDay(data, this.props.children._id)}>{this.props.children.day}</InputField>
              </div>
            </div>
            <InputField data={(data,id) => this.updateType(data, this.props.children._id)} >{this.props.children.type}</InputField>
            <InputField data={(data,id) => this.updateBy(data, this.props.children._id)}>{this.props.children.by}</InputField>
          </SubSection>
    );
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    updateName : (text, id) =>{
      dispatch(actions.actUpdateNameAwardRequest(text,id));
    },
    updateDay : (text, id) =>{
      dispatch(actions.actUpdateDayAwardRequest(text,id));
    },
    updateType : (text, id) =>{
      dispatch(actions.actUpdateTypeAwardRequest(text,id));
    },
    updateBy : (text, id) =>{
      dispatch(actions.actUpdateByAwardRequest(text,id));
    }
  }
}

  export default connect(null, mapDispatchToProps)(AwardSection);