import * as Types from './../constant/ActionType';
var initialState = {};

const info = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_CV:
            state = action.cv;
            console.log(state)
            return state;
        case Types.CHANGE_COLOR:
            state = action.cv;
            return state;
        case Types.CHANGE_ARROW:
            state = action.cv;
            return state;
        case Types.CHANGE_LANGGUAGE:
            state = action.cv;
            return state;
        case Types.CHANGE_SIZE:
            state = action.cv;
            return state;
        case Types.CHANGE_FONT:
            state = action.cv;
            return state;
        case Types.UPDATE_BIRTH_DAY:
            state = action.cv;
            return state;
        case Types.UPDATE_MY_ADDRESS:
            state = action.cv;
            return state;
        case Types.UPDATE_MY_EMAIL:
            state = action.cv;
            return state;
        case Types.UPDATE_MY_PHONE:
            state = action.cv;
            return state;
        case Types.UPDATE_MY_NAME:
            state = action.cv;
            return state;
        case Types.UPDATE_MY_NAMECV:
            state = action.cv;
            return state;
        case Types.UPDATE_MY_CHOOSE:
            state = action.cv;
            return state;
        default: 
            return state;
    }
}

export default info;