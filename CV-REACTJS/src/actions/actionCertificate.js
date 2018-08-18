import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const actAddCertificate = (certificate) =>{
    return {
      type: Types.ADD_CERTIFICATE,
      certificate
    }
  }
  
  export const actfetchAllCertificate = (certificate) =>{
    return {
      type: Types.FETCH_CERTIFICATE,
      certificate
    }
  }
  export const actDeleteCertificate = (number) =>{
    return {
      type: Types.DELETE_CERTIFICATE,
      number
    }
  }
  
  export const updateNameCertificate = (certificate) =>{
    return {
      type: Types.UPDATE_NAME_CERTIFICATE,
      certificate
    }
  }
  
  export const updateDayCertificate = (certificate) =>{
    return {
      type: Types.UPDATE_DAY_CERTIFICATE,
      certificate
    }
  }
  
  export const updateContentCertificate = (certificate) =>{
    return {
      type: Types.UPDATE_CONTENT_CERTIFICATE,
      certificate
    }
  }
  

export const actAddCertificateRequest = (certificate) =>{
    return (dispatch)=> {
      return CallApi('certificate', 'POST', certificate).then(res =>{
        dispatch(actAddCertificate(res.data));
      });
    }
  }
  
  export const actFetchCertificateRequest = (idcv) =>{
  return (dispatch)=> {
    return CallApi('certificate/' + idcv, 'GET', null).then(res =>{
      dispatch(actfetchAllCertificate(res.data));
    });
  }
  }
  export const actDeleteCertificateRequest = (id) =>{
  return (dispatch) =>{
    return CallApi('certificate/' + id, 'DELETE', null).then(res =>{
      dispatch(actDeleteCertificate(id));
    });
  }
  }
  
  export const actUpdateNameCertificateRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('certificate/'+ id, 'PUT', {name : text}).then(res =>{
       dispatch(updateNameCertificate(res.data));
    });
  }
  }
  
  export const actUpdateDayCertificateRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('certificate/'+ id, 'PUT', {day : text}).then(res =>{
       dispatch(updateDayCertificate(res.data));      
    });
  }
  }
  
  export const actUpdateContentCertificateRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('certificate/'+ id, 'PUT', {content : text}).then(res =>{
       dispatch(updateContentCertificate(res.data));      
    });
  }
  }