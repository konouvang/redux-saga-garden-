import { put } from 'redux-saga/effects';
import axios from 'axios';

function* deletePlant(action) {
    try {
        yield axios.delete(`/api/plant/`); // 
        yield put({
            type: 'GET_FRUIT'
        });
    } catch (err) {
        console.log('error HELP:', err);
    }
}

export default deletePlant;