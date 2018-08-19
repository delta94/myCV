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

const certificate = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_CERTIFICATE:
            state = action.certificate;
            return [...state];
        case Types.DELETE_CERTIFICATE:
            id = action.number;
            index = findIndex(state, id);
            state.splice(index,1);
            state.number = state.number - 1;
            return [...state];
        case Types.ADD_CERTIFICATE:
            return [...state, action.certificate];
        case Types.UPDATE_NAME_CERTIFICATE:
            id = action.certificate._id;
            index = findIndex(state, id);
            state[index] = action.certificate;
            return [...state];
        case Types.UPDATE_DAY_CERTIFICATE:
            id = action.certificate._id;
            index = findIndex(state, id);
            state[index] = action.certificate;
            return [...state];
        case Types.UPDATE_CONTENT_CERTIFICATE:
            id = action.certificate._id;
            index = findIndex(state, id);
            state[index] = action.certificate;
            return [...state];
        default: 
            return [...state];
    }
    
}

export default certificate;