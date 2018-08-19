import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const actfetchAllObjective = (objective) =>{
    return {
      type: Types.FETCH_OBJECTIVE,
      objective
    }
  }
  
  export const actAddObjective = (objective) =>{
    return {
      type: Types.ADD_OBJECTIVE,
      objective
    }
  }
  
  export const actDeleteObjective = (number) =>{
    return {
      type: Types.DELETE_OBJECTIVE,
      number
    }
  }
  
  export const updateNameObjective = (objective) =>{
    return {
      type: Types.UPDATE_NAME_OBJECTIVE,
      objective
    }
  }

  export const actAddObjectiveRequest = (objective) =>{
    return (dispatch)=> {
      return CallApi('objective', 'POST', objective).then(res =>{
        dispatch(actAddObjective(res.data));
      });
    }
  }

export const actFetchObjectiveRequest = (idcv) =>{
  return (dispatch)=> {
    return CallApi('objective/'+idcv, 'GET', null).then(res =>{
      dispatch(actfetchAllObjective(res.data));
    });
  }
}
export const actDeleteObjectiveRequest = (id) =>{
  return (dispatch) =>{
    return CallApi('objective/' + id, 'DELETE', null).then(res =>{
      dispatch(actDeleteObjective(id));
    });
  }
}

export const actUpdateNameObjectiveRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('objective/'+ id, 'PUT', {name : text}).then(res =>{
       dispatch(updateNameObjective(res.data));
    });
  }
}