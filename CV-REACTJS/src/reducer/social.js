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

const social = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_SOCIAL:
            state = action.social;
            return [...state];
        case Types.DELETE_SOCIAL:
            id = action.number;
            index = findIndex(state, id);
            state.splice(index,1);
            state.number = state.number - 1;
            return [...state];
        case Types.ADD_SOCIAL:
            return [...state, action.social];
        case Types.UPDATE_NAME_SOCIAL:
            id = action.social._id;
            index = findIndex(state, id);
            state[index] = action.social;
            return [...state];
        default: 
            return [...state];
    }
}

export default social;