import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const actfetchAllEducation = (education) =>{
    return {
      type: Types.FETCH_EDUCATION,
      education
    }
  }
  
  export const actAddEducation = (education) =>{
    return {
      type: Types.ADD_EDUCATION,
      education
    }
  }
  
  export const actDeleteEducation = (number) =>{
    return {
      type: Types.DELETE_EDUCATION,
      number
    }
  }
  
  export const updateNameEducation = (education) =>{
    return {
      type: Types.UPDATE_NAME_EDUCATION,
      education
    }
  }
  
  export const updateTypeEducation = (education) =>{
    return {
      type: Types.UPDATE_TYPE_EDUCATION,
      education
    }
  }
  
  export const updateDescriptionEducation = (education) =>{
    return {
      type: Types.UPDATE_DESCRIPTION_EDUCATION,
      education
    }
  }

  export const actAddEducationRequest = (education) =>{
    return (dispatch)=> {
      return CallApi('education', 'POST', education).then(res =>{
        dispatch(actAddEducation(res.data));
      });
    }
  }

export const actFetchEducationRequest = (idcv) =>{
  return (dispatch)=> {
    return CallApi('education/' + idcv, 'GET', null).then(res =>{
      dispatch(actfetchAllEducation(res.data));
    });
  }
}
export const actDeleteEducationRequest = (id) =>{
  return (dispatch) =>{
    return CallApi('education/' + id, 'DELETE', null).then(res =>{
      dispatch(actDeleteEducation(id));
    });
  }
}

export const actUpdateNameEducationRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('education/'+ id, 'PUT', {name : text}).then(res =>{
       dispatch(updateNameEducation(res.data));
    });
  }
}

export const actUpdateTypeEducationRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('education/'+ id, 'PUT', {type : text}).then(res =>{
       dispatch(updateTypeEducation(res.data));      
    });
  }
}

export const actUpdateDescriptionEducationRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('education/'+ id, 'PUT', {description : text}).then(res =>{
       dispatch(updateDescriptionEducation(res.data));      
    });
  }
}