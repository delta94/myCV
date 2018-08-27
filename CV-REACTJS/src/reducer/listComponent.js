import * as Types from './../constant/ActionType';
var initialState = []

const listComponent = (state = initialState, action) => {
    switch (action.type){
        case Types.FETCH_COMPONENT:
            state = action.list;
            return state;
        default: 
            return state;
    }
}

export default listComponent;