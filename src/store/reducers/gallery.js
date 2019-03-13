import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: [],
    error: false
};

const galleryBg = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_GALLERY_BG:
            return (...state, data: action.galleryBg );
        case actionTypes.SET_GALLERY_BG_FAIL:
            return (...state, { error: true });
        default:
            return state;
    }
};

export default galleryBg;