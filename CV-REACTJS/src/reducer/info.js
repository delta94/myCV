import * as Types from './../constant/ActionType';
var initialState = {};

const info = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_CV:
            state = action.cv;
            return state;
        default: 
            return state;
    }
}

export default info;