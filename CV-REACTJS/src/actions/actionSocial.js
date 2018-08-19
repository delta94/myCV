import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const actfetchAllSocial = (social) =>{
    return {
      type: Types.FETCH_SOCIAL,
      social
    }
  }
  
  export const actAddSocial = (social) =>{
    return {
      type: Types.ADD_SOCIAL,
      social
    }
  }
  
  export const actDeleteSocial = (number) =>{
    return {
      type: Types.DELETE_SOCIAL,
      number
    }
  }
  
  export const updateNameSocial = (social) =>{
    return {
      type: Types.UPDATE_NAME_SOCIAL,
      social
    }
  }

  export const actAddSocialRequest = (social) =>{
    return (dispatch)=> {
      return CallApi('social', 'POST', social).then(res =>{
        dispatch(actAddSocial(res.data));
      });
    }
  }

export const actFetchSocialRequest = (idcv) =>{
  return (dispatch)=> {
    return CallApi('social/'+idcv, 'GET', null).then(res =>{
      dispatch(actfetchAllSocial(res.data));
    });
  }
}
export const actDeleteSocialRequest = (id) =>{
  return (dispatch) =>{
    return CallApi('social/' + id, 'DELETE', null).then(res =>{
      dispatch(actDeleteSocial(id));
    });
  }
}

export const actUpdateNameSocialRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('social/'+ id, 'PUT', {name : text}).then(res =>{
       dispatch(updateNameSocial(res.data));
    });
  }
}