import * as actionTypes from './actionTypes';

export const initialHomeGallery = () => {
    return {
        type: actionTypes.INIT_HOME_GALLERY
    }
};

export const getHomeGallery = (gallery) => {
    return {
        type: actionTypes.GET_HOME_GALLERY,
        gallery
    }
};

export const getHomeGalleryFail = (error) => {
    return {
        type: actionTypes.GET_HOME_GALLERY_FAIL,
        error
    }
};