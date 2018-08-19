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

const skill = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_SKILL:
            state = action.skill;
            return [...state];
        case Types.DELETE_SKILL:
            id = action.number;
            index = findIndex(state, id);
            state.splice(index,1);
            return [...state];
        case Types.ADD_SKILL:
            return [...state, action.skill];
        case Types.UPDATE_NAME_SKILL:
            id = action.skill._id;
            index = findIndex(state, id);
            state[index] = action.skill;
            return [...state];
        case Types.UPDATE_NUMBER_SKILL:
            id = action.skill._id;
            index = findIndex(state, id);
            state[index] = action.skill;
            return [...state];
        default: 
            return [...state];
    }
}

export default skill;