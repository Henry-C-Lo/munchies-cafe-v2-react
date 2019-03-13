import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/index';
import * as URL from '../../constants';

export function* initialHomeGallerySaga() {
    try {
        const response = yield axios.get(URL.HOME_GALLERY_API);
        yield put(actions.getHomeGallery(response.data.data));
    } catch(error) {
        yield put(actions.getHomeGalleryFail(error));
    }
}