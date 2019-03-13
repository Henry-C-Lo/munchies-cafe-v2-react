
import * as actionTypes from '../actions/actionTypes';


const initialState = {
    data: [],
    error: false
};

const homeGalleryReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_HOME_GALLERY:
            return Object.assign({}, state, { data: state.data.concat(action.gallery) });
        case actionTypes.GET_HOME_GALLERY_FAIL:
            return Object.assign({}, state, { error: true });
        default:
            return state;
    }
};

export default homeGalleryReducer;

