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

const project = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_PROJECT:
            state = action.project;
            return [...state];
        case Types.DELETE_PROJECT:
            id = action.number;
            index = findIndex(state, id);
            state.splice(index,1);
            return [...state];
        case Types.ADD_PROJECT:
            return [...state, action.project];
        case Types.UPDATE_NAME_PROJECT:
            id = action.project._id;
            index = findIndex(state, id);
            state[index] = action.project;
            return [...state];
        case Types.UPDATE_DAY_BEGIN_PROJECT:
            id = action.project._id;
            index = findIndex(state, id);
            state[index] = action.project;
            return [...state];
        case Types.UPDATE_DAY_END_PROJECT:
            id = action.project._id;
            index = findIndex(state, id);
            state[index] = action.project;
            return [...state];
        case Types.UPDATE_TYPE_PROJECT:
            id = action.project._id;
            index = findIndex(state, id);
            state[index] = action.project;
            return [...state];
        case Types.UPDATE_BY_PROJECT:
            id = action.project._id;
            index = findIndex(state, id);
            state[index] = action.project;
            return [...state];
        default: 
            return [...state];
    }
}

export default project;