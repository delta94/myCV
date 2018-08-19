import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const actfetchAllReference = (reference) =>{
    return {
      type: Types.FETCH_REFERENCE,
      reference
    }
  }
  
  export const actAddReference = (reference) =>{
    return {
      type: Types.ADD_REFERENCE,
      reference
    }
  }
  
  export const actDeleteReference = (number) =>{
    return {
      type: Types.DELETE_REFERENCE,
      number
    }
  }
  
  export const updateNameReference = (reference) =>{
    return {
      type: Types.UPDATE_NAME_REFERENCE,
      reference
    }
  }
  
  export const updateDayReference = (reference) =>{
    return {
      type: Types.UPDATE_DAY_REFERENCE,
      reference
    }
  }
  
  export const updatePhoneReference = (reference) =>{
    return {
      type: Types.UPDATE_PHONE_REFERENCE,
      reference
    }
  }
  
  export const updateEmailReference = (reference) =>{
    return {
      type: Types.UPDATE_EMAIL_REFERENCE,
      reference
    }
  }

  export const actAddReferenceRequest = (reference) =>{
    return (dispatch)=> {
      return CallApi('reference', 'POST', reference).then(res =>{
        dispatch(actAddReference(res.data));
      });
    }
  }

export const actFetchReferenceRequest = (idcv) =>{
  return (dispatch)=> {
    return CallApi('reference/'+idcv, 'GET', null).then(res =>{
      dispatch(actfetchAllReference(res.data));
    });
  }
}
export const actDeleteReferenceRequest = (id) =>{
  return (dispatch) =>{
    return CallApi('reference/' + id, 'DELETE', null).then(res =>{
      dispatch(actDeleteReference(id));
    });
  }
}

export const actUpdateNameReferenceRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('reference/'+ id, 'PUT', {name : text}).then(res =>{
       dispatch(updateNameReference(res.data));
    });
  }
}

export const actUpdateDayReferenceRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('reference/'+ id, 'PUT', {day : text}).then(res =>{
       dispatch(updateDayReference(res.data));      
    });
  }
}

export const actUpdatePhoneReferenceRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('reference/'+ id, 'PUT', {type : text}).then(res =>{
       dispatch(updatePhoneReference(res.data));      
    });
  }
}

export const actUpdateEmailReferenceRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('reference/'+ id, 'PUT', {by : text}).then(res =>{
       dispatch(updateEmailReference(res.data));      
    });
  }
}