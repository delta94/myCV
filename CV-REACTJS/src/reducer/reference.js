import * as Types from './../constant/ActionType';
var initialState = []


var id = "";
var index = "";

var findIndex = (tasks, id) =>{
    var result = -1;
    tasks.forEach((task,index)=>{
        if(task._id === id){
            result = index;
        }
    });
    return result;
}

const reference = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_REFERENCE:
        state = action.reference;
        return [...state];
    case Types.DELETE_REFERENCE:
        id = action.number;
        index = findIndex(state, id);
        state.splice(index,1);
        return [...state];
    case Types.ADD_REFERENCE:
        return [...state, action.reference];
    case Types.UPDATE_NAME_REFERENCE:
        id = action.reference._id;
        index = findIndex(state, id);
        state[index] = action.reference;
        return [...state];
    case Types.UPDATE_DAY_REFERENCE:
        id = action.reference._id;
        index = findIndex(state, id);
        state[index] = action.reference;
        return [...state];
    case Types.UPDATE_PHONE_REFERENCE:
        id = action.reference._id;
        index = findIndex(state, id);
        state[index] = action.reference;
        return [...state];
    case Types.UPDATE_EMAIL_REFERENCE:
        id = action.reference._id;
        index = findIndex(state, id);
        state[index] = action.reference;
        return [...state];
    default: 
        return [...state];
    }
}

export default reference;