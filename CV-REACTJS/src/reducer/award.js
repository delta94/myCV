import * as Types from './../constant/ActionType';
var initialState = []


var id = "";
var index = "";

var findIndex = (tasks, id) =>{
    var result = -1;
    tasks.forEach((task,index)=>{
        if(task.id === id){
            result = index;
        }
    });
    return result;
}

const award = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_AWARD:
            state = action.award;
            return [...state];
        case Types.DELETE_AWARD:
            id = action.number;
            index = findIndex(state, id);
            state.splice(index,1);
            state.number = state.number - 1;
            return [...state];
        case Types.ADD_AWARD:
            return [...state, action.award];
        case Types.UPDATE_NAME_AWARD:
            id = action.award._id;
            index = findIndex(state, id);
            state[index] = action.award;
            return [...state];
        case Types.UPDATE_DAY_AWARD:
            id = action.award._id;
            index = findIndex(state, id);
            state[index] = action.award;
            return [...state];
        case Types.UPDATE_TYPE_AWARD:
            id = action.award._id;
            index = findIndex(state, id);
            state[index] = action.award;
            return [...state];
        case Types.UPDATE_BY_AWARD:
            id = action.award._id;
            index = findIndex(state, id);
            state[index] = action.award;
            return [...state];
        default: 
            return [...state];
    }
}

export default award;