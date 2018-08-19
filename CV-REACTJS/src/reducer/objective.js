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

const objective = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_OBJECTIVE:
            state = action.objective;
            return [...state];
        case Types.DELETE_OBJECTIVE:
            id = action.number;
            index = findIndex(state, id);
            state.splice(index,1);
            return [...state];
        case Types.ADD_OBJECTIVE:
            return [...state, action.objective];
        case Types.UPDATE_NAME_OBJECTIVE:
            id = action.objective._id;
            index = findIndex(state, id);
            state[index] = action.objective;
            return [...state];
        default: 
            return [...state];
    }
}

export default objective;