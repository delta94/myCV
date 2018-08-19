import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const actfetchAllLanguage = (language) =>{
    return {
      type: Types.FETCH_LANGUAGE,
      language
    }
  }
  
  export const actAddLanguage = (language) =>{
    return {
      type: Types.ADD_LANGUAGE,
      language
    }
  }
  
  export const actDeleteLanguage = (number) =>{
    return {
      type: Types.DELETE_LANGUAGE,
      number
    }
  }
  
  export const updateNameLanguage = (language) =>{
    return {
      type: Types.UPDATE_NAME_LANGUAGE,
      language
    }
  }
  
  export const updateSkillLanguage = (language) =>{
    return {
      type: Types.UPDATE_SKILL_LANGUAGE,
      language
    }
  }

  export const actAddLanguageRequest = (language) =>{
    return (dispatch)=> {
      return CallApi('language', 'POST', language).then(res =>{
        dispatch(actAddLanguage(res.data));
      });
    }
  }

export const actFetchLanguageRequest = (idcv) =>{
  return (dispatch)=> {
    return CallApi('language/'+idcv, 'GET', null).then(res =>{
      dispatch(actfetchAllLanguage(res.data));
    });
  }
}
export const actDeleteLanguageRequest = (id) =>{
  return (dispatch) =>{
    return CallApi('language/' + id, 'DELETE', null).then(res =>{
      dispatch(actDeleteLanguage(id));
    });
  }
}

export const actUpdateNameLanguageRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('language/'+ id, 'PUT', {name : text}).then(res =>{
       dispatch(updateNameLanguage(res.data));
    });
  }
}

export const actUpdateSkillLanguageRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('language/'+ id, 'PUT', {skill : text}).then(res =>{
       dispatch(updateSkillLanguage(res.data));      
    });
  }
}