import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { initialHomeGallerySaga } from "./gallery";
import { initialMenuAppetizersSaga } from "./menuAppetizers";


export function* watchHomeGallery() {
    yield takeEvery(actionTypes.INIT_HOME_GALLERY, initialHomeGallerySaga);
}

export function* watchMenuAppetizers() {
    yield takeEvery(actionTypes.INIT_MENU_APPETIZERS, initialMenuAppetizersSaga);
}
