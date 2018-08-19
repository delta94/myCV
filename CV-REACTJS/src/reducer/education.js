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


const education = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_EDUCATION:
            state = action.education;
            return [...state];
        case Types.DELETE_EDUCATION:
            id = action.number;
            index = findIndex(state, id);
            state.splice(index,1);
            return [...state];
        case Types.ADD_EDUCATION:
            return [...state, action.education];
        case Types.UPDATE_NAME_EDUCATION:
            id = action.education._id;
            index = findIndex(state, id);
            state[index] = action.education;
            return [...state];
        case Types.UPDATE_TYPE_EDUCATION:
            id = action.education._id;
            index = findIndex(state, id);
            state[index] = action.education;
            return [...state];
        case Types.UPDATE_DESCRIPTION_EDUCATION:
            id = action.education._id;
            index = findIndex(state, id);
            state[index] = action.education;
            return [...state];
        default: 
            return [...state];
    }
}

export default education;