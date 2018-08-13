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
            action.number = state.length + 1;
            state.push({id : action.number, 
            name : "TÊN GIẢI THƯỞNG",
            day : "Ngày Cấp",
            type : "Loại Giải",
            by : "Cấp bởi tổ chức"});
            state.number = action.number;
            return [...state];
        case Types.UPDATE_NAME_AWARD:
            state[action.award.id-1].name = action.award.name;
            return [...state];
        case Types.UPDATE_DAY_AWARD:
            state[action.award.id-1].day = action.award.day;
            return [...state];
        case Types.UPDATE_TYPE_AWARD:
            state[action.award.id-1].type = action.award.type;
            return [...state];
        case Types.UPDATE_BY_AWARD:
            state[action.award.id-1].by = action.award.by;
            return [...state];
        default: 
            return [...state];
    }
}

export default award;