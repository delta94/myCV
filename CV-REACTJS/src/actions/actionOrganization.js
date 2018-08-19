import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const actfetchAllOrganization = (organization) =>{
    return {
      type: Types.FETCH_ORGANIZATION,
      organization
    }
  }
  
  export const actAddOrganization = (organization) =>{
    return {
      type: Types.ADD_ORGANIZATION,
      organization
    }
  }
  
  export const actDeleteOrganization = (number) =>{
    return {
      type: Types.DELETE_ORGANIZATION,
      number
    }
  }
  
  export const updateNameOrganization = (organization) =>{
    return {
      type: Types.UPDATE_NAME_ORGANIZATION,
      organization
    }
  }
  
  export const updateDayBeginOrganization = (organization) =>{
    return {
      type: Types.UPDATE_DAY_BEGIN_ORGANIZATION,
      organization
    }
  }

  export const updateDayEndOrganization = (organization) =>{
    return {
      type: Types.UPDATE_DAY_END_ORGANIZATION,
      organization
    }
  }
  
  export const updateTypeOrganization = (organization) =>{
    return {
      type: Types.UPDATE_TYPE_ORGANIZATION,
      organization
    }
  }
  
  export const updateByOrganization = (organization) =>{
    return {
      type: Types.UPDATE_BY_ORGANIZATION,
      organization
    }
  }

  export const actAddOrganizationRequest = (organization) =>{
    return (dispatch)=> {
      return CallApi('organization', 'POST', organization).then(res =>{
        dispatch(actAddOrganization(res.data));
      });
    }
  }

export const actFetchOrganizationRequest = (idcv) =>{
  return (dispatch)=> {
    return CallApi('organization/'+idcv, 'GET', null).then(res =>{
      dispatch(actfetchAllOrganization(res.data));
    });
  }
}
export const actDeleteOrganizationRequest = (id) =>{
  return (dispatch) =>{
    return CallApi('organization/' + id, 'DELETE', null).then(res =>{
      dispatch(actDeleteOrganization(id));
    });
  }
}

export const actUpdateNameOrganizationRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('organization/'+ id, 'PUT', {name : text}).then(res =>{
       dispatch(updateNameOrganization(res.data));
    });
  }
}

export const actUpdateDayBeginOrganizationRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('organization/'+ id, 'PUT', {daybegin : text}).then(res =>{
       dispatch(updateDayBeginOrganization(res.data));      
    });
  }
}

export const actUpdateDayEndOrganizationRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('organization/'+ id, 'PUT', {dayend : text}).then(res =>{
       dispatch(updateDayEndOrganization(res.data));      
    });
  }
}

export const actUpdateTypeOrganizationRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('organization/'+ id, 'PUT', {type : text}).then(res =>{
       dispatch(updateTypeOrganization(res.data));      
    });
  }
}

export const actUpdateByOrganizationRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('organization/'+ id, 'PUT', {by : text}).then(res =>{
       dispatch(updateByOrganization(res.data));      
    });
  }
}