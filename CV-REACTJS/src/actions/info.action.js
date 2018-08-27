import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const getIDCV = (id) =>{
  return {
    type: Types.GET_ID_CV,
    id
  }
}

export const actfetchComponent = (list) =>{
  return {
    type: Types.FETCH_COMPONENT,
    list
  }
}

export const actfetchCV = (cv) =>{
  return {
    type: Types.FETCH_CV,
    cv
  }
}

export const actUpdateNameRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {name : text}).then(res =>{
       dispatch(actfetchCV(res.data));
    });
  }
}
export const actUpdateNameCVRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {namecv : text}).then(res =>{
       dispatch(actfetchCV(res.data));
    });
  }
}
export const actUpdateChooseRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {choose : text}).then(res =>{
       dispatch(actfetchCV(res.data));
    });
  }
}
export const actUpdateBirthDayRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {day : text}).then(res =>{
       dispatch(actfetchCV(res.data));
    });
  }
}
export const actUpdateAddressRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {address : text}).then(res =>{
       dispatch(actfetchCV(res.data));
    });
  }
}

export const actUpdateMyPhoneRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {phone : text}).then(res =>{
       dispatch(actfetchCV(res.data));
    });
  }
}
export const actUpdateEmailRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {email : text}).then(res =>{
       dispatch(actfetchCV(res.data));
    });
  }
}
export const actFetchCVRequest = (id) =>{
  return (dispatch)=> {
    return CallApi('cv/' + id, 'GET', null).then(res =>{
      dispatch(actfetchCV(res.data));
          //console.log(res.data)
    });
  }
}

export const actChangeColorRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {color : text}).then(res =>{
       dispatch(actfetchCV(res.data));
       //console.log("color: ",res.data);
    });
  }
}

export const actChangeSizeRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {size : text}).then(res =>{
       dispatch(actfetchCV(res.data));
    });
  }
}

export const actChangeArrowRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {arrow : text}).then(res =>{
       dispatch(actfetchCV(res.data));
    });
  }
}
export const actChangeFontRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {font : text}).then(res =>{
      //console.log(res.data.font)
       dispatch(actfetchCV(res.data));
    });
  }
}
export const actChangeLanguageRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {language : text}).then(res =>{
       dispatch(actfetchCV(res.data));
    });
  }
}
export const actUpdateListComponent = (name, direction, id) =>{
  return (dispatch) => {
    return CallApi('getListComponent/'+ id, 'POST', {
      "_Name" : name,
      "_Direction": direction
    }).then(res =>{
       dispatch(actfetchCV(res.data));      
    });
  }
}
export const actHiddenComponent = (name, id) =>{
  return (dispatch) => {
    return CallApi('hiddenComponent/'+ id, 'POST', {
      "_Name" : name,
    }).then(res =>{
       dispatch(actfetchCV(res.data));      
    });
  }
}
export const actListComponent = (id) =>{
  return (dispatch) =>{
    return CallApi('getListCheck/' + id, "GET",{

    }).then(res =>{
      dispatch(actfetchComponent(res.data))
    })
  }
}