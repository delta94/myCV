import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const actfetchAllSkill = (skill) =>{
    return {
      type: Types.FETCH_SKILL,
      skill
    }
  }
  
  export const actAddSkill = (skill) =>{
    return {
      type: Types.ADD_SKILL,
      skill
    }
  }
  
  export const actDeleteSkill = (number) =>{
    return {
      type: Types.DELETE_SKILL,
      number
    }
  }
  
  export const updateNameSkill = (skill) =>{
    return {
      type: Types.UPDATE_NAME_SKILL,
      skill
    }
  }

  export const updateNumberSkill = (skill) =>{
    return {
      type: Types.UPDATE_NUMBER_SKILL,
      skill
    }
  }

  export const actAddSkillRequest = (skill) =>{
    return (dispatch)=> {
      return CallApi('skill', 'POST', skill).then(res =>{
        dispatch(actAddSkill(res.data));
      });
    }
  }

export const actFetchSkillRequest = (idcv) =>{
  return (dispatch)=> {
    return CallApi('skill/'+idcv, 'GET', null).then(res =>{
      dispatch(actfetchAllSkill(res.data));
    });
  }
}
export const actDeleteSkillRequest = (id) =>{
  return (dispatch) =>{
    return CallApi('skill/' + id, 'DELETE', null).then(res =>{
      dispatch(actDeleteSkill(id));
    });
  }
}

export const actUpdateNameSkillRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('skill/'+ id, 'PUT', {name : text}).then(res =>{
       dispatch(updateNameSkill(res.data));
    });
  }
}

export const actUpdateNumberSkillRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('skill/'+ id, 'PUT', {number : text}).then(res =>{
       dispatch(updateNumberSkill(res.data));
    });
  }
}