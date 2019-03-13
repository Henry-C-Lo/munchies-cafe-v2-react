import * as actionTypes from './actionTypes';

export const initialMenuAppetizers = () => {
    return {
        type: actionTypes.INIT_MENU_APPETIZERS
    }
};

export const getMenuAppetizers = (menuAppetizers) => {
    return {
        type: actionTypes.GET_MENU_APPETIZERS,
        menuAppetizers
    }
};

export const getMenuAppetizersFail = (error) => {
    return {
        type: actionTypes.GET_MENU_APPETIZERS_FAIL,
        error
    }
};