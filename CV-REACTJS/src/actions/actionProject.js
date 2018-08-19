import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const actfetchAllProject = (project) =>{
    return {
      type: Types.FETCH_PROJECT,
      project
    }
  }
  
  export const actAddProject = (project) =>{
    return {
      type: Types.ADD_PROJECT,
      project
    }
  }
  
  export const actDeleteProject = (number) =>{
    return {
      type: Types.DELETE_PROJECT,
      number
    }
  }
  
  export const updateNameProject = (project) =>{
    return {
      type: Types.UPDATE_NAME_PROJECT,
      project
    }
  }
  
  export const updateDayBeginProject = (project) =>{
    return {
      type: Types.UPDATE_DAY_BEGIN_PROJECT,
      project
    }
  }

  export const updateDayEndProject = (project) =>{
    return {
      type: Types.UPDATE_DAY_END_PROJECT,
      project
    }
  }
  
  export const updateTypeProject = (project) =>{
    return {
      type: Types.UPDATE_TYPE_PROJECT,
      project
    }
  }
  
  export const updateByProject = (project) =>{
    return {
      type: Types.UPDATE_BY_PROJECT,
      project
    }
  }

  export const actAddProjectRequest = (project) =>{
    return (dispatch)=> {
      return CallApi('project', 'POST', project).then(res =>{
        dispatch(actAddProject(res.data));
      });
    }
  }

export const actFetchProjectRequest = (idcv) =>{
  return (dispatch)=> {
    return CallApi('project/'+idcv, 'GET', null).then(res =>{
      dispatch(actfetchAllProject(res.data));
    });
  }
}
export const actDeleteProjectRequest = (id) =>{
  return (dispatch) =>{
    return CallApi('project/' + id, 'DELETE', null).then(res =>{
      dispatch(actDeleteProject(id));
    });
  }
}

export const actUpdateNameProjectRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('project/'+ id, 'PUT', {name : text}).then(res =>{
       dispatch(updateNameProject(res.data));
    });
  }
}

export const actUpdateDayBeginProjectRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('project/'+ id, 'PUT', {daybegin : text}).then(res =>{
       dispatch(updateDayBeginProject(res.data));      
    });
  }
}

export const actUpdateDayEndProjectRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('project/'+ id, 'PUT', {dayend : text}).then(res =>{
       dispatch(updateDayEndProject(res.data));      
    });
  }
}

export const actUpdateTypeProjectRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('project/'+ id, 'PUT', {type : text}).then(res =>{
       dispatch(updateTypeProject(res.data));      
    });
  }
}

export const actUpdateByProjectRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('project/'+ id, 'PUT', {by : text}).then(res =>{
       dispatch(updateByProject(res.data));      
    });
  }
}