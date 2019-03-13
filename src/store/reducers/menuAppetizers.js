
import * as actionTypes from '../actions/actionTypes';


const initialState = {
    data: [],
    error: false
};

const menuAppetizersReducer = (state = initialState, action) => {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case actionTypes.GET_MENU_APPETIZERS:
            return Object.assign({}, state, { data: state.data.concat(action.menuAppetizers) });
        case actionTypes.GET_MENU_APPETIZERS_FAIL:
            return Object.assign({}, state, { error: true });
        default:
            return state;
    }
};

export default menuAppetizersReducer;

