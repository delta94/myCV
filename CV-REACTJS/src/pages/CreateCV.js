import React, { Component } from 'react';
import EditCV from './../components/EditCV/EditCV';
import ModelCV from './../components/ModelCV/ModelCV';
import * as actions from './../actions/info.action';
import {connect} from 'react-redux';

class CreateCV extends Component {
  componentWillMount(){
    this.props.getIDCV(this.getQueryParams(window.location.href));
  }
  getQueryParams(qs) {
    var re = /\w+\b/g;
    var result = re[Symbol.match](qs);
    return result[4];
  }
  render() {
    return (
      <div>
        <EditCV />
        <ModelCV />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    getIDCV : (id) =>{
      dispatch(actions.getIDCV(id));
    }
  }
}

export default connect(null,mapDispatchToProps)(CreateCV);
