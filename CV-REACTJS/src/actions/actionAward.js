import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const actfetchAllAward = (award) =>{
    return {
      type: Types.FETCH_AWARD,
      award
    }
  }
  
  export const actAddAward = (award) =>{
    return {
      type: Types.ADD_AWARD,
      award
    }
  }
  
  export const actDeleteAward = (number) =>{
    return {
      type: Types.DELETE_AWARD,
      number
    }
  }
  
  export const updateNameAward = (award) =>{
    return {
      type: Types.UPDATE_NAME_AWARD,
      award
    }
  }
  
  export const updateDayAward = (award) =>{
    return {
      type: Types.UPDATE_DAY_AWARD,
      award
    }
  }
  
  export const updateTypeAward = (award) =>{
    return {
      type: Types.UPDATE_TYPE_AWARD,
      award
    }
  }
  
  export const updateByAward = (award) =>{
    return {
      type: Types.UPDATE_BY_AWARD,
      award
    }
  }

  export const actAddAwardRequest = (award) =>{
    return (dispatch)=> {
      return CallApi('award', 'POST', award).then(res =>{
        console.log(award)
        dispatch(actAddAward(res.data));
      });
    }
  }

export const actFetchAwardRequest = (idcv) =>{
  return (dispatch)=> {
    return CallApi('award/'+ idcv, 'GET', null).then(res =>{
      dispatch(actfetchAllAward(res.data));
    });
  }
}
export const actDeleteAwardRequest = (id) =>{
  return (dispatch) =>{
    return CallApi('award/' + id, 'DELETE', null).then(res =>{
      dispatch(actDeleteAward(id));
    });
  }
}

export const actUpdateNameAwardRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('award/'+ id, 'PUT', {name : text}).then(res =>{
       dispatch(updateNameAward(res.data));
    });
  }
}

export const actUpdateDayAwardRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('award/'+ id, 'PUT', {day : text}).then(res =>{
       dispatch(updateDayAward(res.data));      
    });
  }
}

export const actUpdateTypeAwardRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('award/'+ id, 'PUT', {type : text}).then(res =>{
       dispatch(updateTypeAward(res.data));      
    });
  }
}

export const actUpdateByAwardRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('award/'+ id, 'PUT', {by : text}).then(res =>{
       dispatch(updateByAward(res.data));      
    });
  }
}