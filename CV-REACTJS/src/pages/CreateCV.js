import React, { Component } from 'react';
import EditCV from './../components/EditCV/EditCV';
import ModelCV from './../components/ModelCV/ModelCV';
import * as actions from './../actions/info.action';
import {connect} from 'react-redux';

class CreateCV extends Component {
  componentWillMount(){
    this.props.getIDCV(this.getQueryParams(window.location.href));
    this.props.fetchCV(this.getQueryParams(window.location.href));
  }
  getQueryParams(qs) {
    var re = /\w+\b/g;
    var result = re[Symbol.match](qs);
    return result[4];
  }
  render() {
    return (
      <div>
        <EditCV info = {this.props.info}/>
        <ModelCV />
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    info : state.info
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    fetchCV : (id) =>{
      dispatch(actions.actFetchCVRequest(id));
    },
    getIDCV : (id) =>{
      dispatch(actions.getIDCV(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateCV);
