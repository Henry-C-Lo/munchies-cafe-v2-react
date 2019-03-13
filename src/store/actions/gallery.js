import * as actionTypes from './actionTypes';


export const setGalleryBg = () => {
    return {
        type: actionTypes.SET_GALLERY_BG,
        galleryBg
    }
};

export const setGalleryBgFail = (error) => {
    return {
        type: actionTypes.SET_GALLERY_BG_FAIL,
        error
    }
};