import * as Types from './../constant/ActionType';
import CallApi from './../until/apiCaller';

export const getIDCV = (id) =>{
  return {
    type: Types.GET_ID_CV,
    id
  }
}

export const actfetchCV = (cv) =>{
  return {
    type: Types.FETCH_CV,
    cv
  }
}
export const actChangeColor = (cv) =>{
  return {
    type: Types.CHANGE_COLOR,
    cv
  }
}

export const actChangeSize = (cv) =>{
  return {
    type: Types.CHANGE_SIZE,
    cv
  }
}

export const actChangeArrow = (cv) =>{
  return {
    type: Types.CHANGE_ARROW,
    cv
  }
}

export const actChangeFont = (cv) =>{
  return {
    type: Types.CHANGE_FONT,
    cv
  }
}

export const actChangeLanguage = (cv) =>{
  return {
    type: Types.CHANGE_LANGGUAGE,
    cv
  }
}

export const actUpdateBirthDay = (cv) =>{
  return {
    type: Types.UPDATE_BIRTH_DAY,
    cv
  }
}

export const actUpdateAddress = (cv) =>{
  return {
    type: Types.UPDATE_MY_ADDRESS,
    cv
  }
}

export const actUpdateMyPhone = (cv) =>{
  return {
    type: Types.UPDATE_MY_PHONE,
    cv
  }
}

export const actUpdateEmail = (email) =>{
  return {
    type: Types.UPDATE_MY_EMAIL,
    email
  }
}

export const actUpdateName = (cv) =>{
  return {
    type: Types.CHANGE_LANGGUAGE,
    cv
  }
}

export const actUpdateNameCV = (cv) =>{
  return {
    type: Types.CHANGE_LANGGUAGE,
    cv
  }
}

export const actUpdateChoose = (cv) =>{
  return {
    type: Types.CHANGE_LANGGUAGE,
    cv
  }
}
export const actUpdateNameRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {name : text}).then(res =>{
       dispatch(actUpdateName(res.data));
    });
  }
}
export const actUpdateNameCVRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {namecv : text}).then(res =>{
       dispatch(actUpdateNameCV(res.data));
    });
  }
}
export const actUpdateChooseRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {choose : text}).then(res =>{
       dispatch(actUpdateChoose(res.data));
    });
  }
}
export const actUpdateBirthDayRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {day : text}).then(res =>{
       dispatch(actUpdateBirthDay(res.data));
    });
  }
}
export const actUpdateAddressRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {address : text}).then(res =>{
       dispatch(actUpdateAddress(res.data));
    });
  }
}

export const actUpdateMyPhoneRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {phone : text}).then(res =>{
       dispatch(actUpdateMyPhone(res.data));
    });
  }
}
export const actUpdateEmailRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {email : text}).then(res =>{
       dispatch(actUpdateEmail(res.data));
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
       dispatch(actChangeColor(res.data));
       //console.log("color: ",res.data);
    });
  }
}

export const actChangeSizeRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {size : text}).then(res =>{
       dispatch(actChangeSize(res.data));
    });
  }
}

export const actChangeArrowRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {arrow : text}).then(res =>{
       dispatch(actChangeArrow(res.data));
    });
  }
}
export const actChangeFontRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {font : text}).then(res =>{
      //console.log(res.data.font)
       dispatch(actChangeFont(res.data));
    });
  }
}
export const actChangeLanguageRequest = (text, id) =>{
  return (dispatch) => {
    return CallApi('cv/'+ id, 'PUT', {language : text}).then(res =>{
       dispatch(actChangeLanguage(res.data));
    });
  }
}
