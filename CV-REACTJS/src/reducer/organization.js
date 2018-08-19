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
const organization = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_ORGANIZATION:
            state = action.organization;
            return [...state];
        case Types.DELETE_ORGANIZATION:
            id = action.number;
            index = findIndex(state, id);
            state.splice(index,1);
            return [...state];
        case Types.ADD_ORGANIZATION:
            return [...state, action.organization];
        case Types.UPDATE_NAME_ORGANIZATION:
            id = action.objective._id;
            index = findIndex(state, id);
            state[index] = action.objective;
            return [...state];
        case Types.UPDATE_DAY_BEGIN_ORGANIZATION:
            id = action.organization._id;
            index = findIndex(state, id);
            state[index] = action.organization;
            return [...state];
        case Types.UPDATE_DAY_END_ORGANIZATION:
            id = action.organization._id;
            index = findIndex(state, id);
            state[index] = action.organization;
            return [...state];
        case Types.UPDATE_TYPE_ORGANIZATION:
            id = action.organization._id;
            index = findIndex(state, id);
            state[index] = action.organization;
            return [...state];
        case Types.UPDATE_BY_ORGANIZATION:
            id = action.organization._id;
            index = findIndex(state, id);
            state[index] = action.organization;
            return [...state];
        default: 
            return [...state];
    }
}

export default organization;