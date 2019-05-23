import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';


import App from './App';

// this startingPlantArray should eventually be removed
const startingPlantArray = [
  { id: 1, name: 'Rose' },
  { id: 2, name: 'Tulip' },
  { id: 3, name: 'Oak' }
];

const plantList = (state = startingPlantArray, action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return [ ...state, action.payload ]
    default:
      return state;
  }
};

function* postPlant(action) {
  console.log(action.payload);
  try {
      yield axios.post('/api/plant', action.payload);
      yield put({
          type: 'FETCH_PLANTS'
      });
      console.log(action.payload);
  } catch (err) {
      console.log('error HELP:', err);
  }
}

function* watcherSaga() {
  yield takeEvery('ADD_ELEMENT', postPlant);

}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ 
    plantList
  
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
