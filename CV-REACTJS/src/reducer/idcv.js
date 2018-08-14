import * as Types from './../constant/ActionType';
var initialState = null;

const idcv = (state = initialState, action) => {
    switch (action.type){
        
        case Types.GET_ID_CV:
            state = action.id;
            return state;
        default: 
            return state;
    }
}

export default idcv;