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

const language = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_LANGUAGE:
            state = action.language;
            return [...state];
        case Types.DELETE_LANGUAGE:
            id = action.number;
            index = findIndex(state, id);
            state.splice(index,1);
            return [...state];
        case Types.ADD_LANGUAGE:
            return [...state, action.language];
        case Types.UPDATE_NAME_LANGUAGE:
            id = action.language._id;
            index = findIndex(state, id);
            state[index] = action.language;
            return [...state];
        case Types.UPDATE_SKILL_LANGUAGE:
            id = action.language._id;
            index = findIndex(state, id);
            state[index] = action.language;
            return [...state];
        default: 
            return [...state];
    }
}

export default language;