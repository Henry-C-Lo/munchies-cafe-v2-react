import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/index';
import * as URL from '../../constants';

export function* initialMenuAppetizersSaga() {
    try {
        const response = yield axios.get(URL.MENU_APPETIZERS_API);
        console.log(response);
        yield put(actions.getMenuAppetizers(response.data.data));
    } catch(error) {
        yield put(actions.getMenuAppetizersFail(error));
    }
}