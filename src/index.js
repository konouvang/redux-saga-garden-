import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


import App from './App';

// this startingPlantArray should eventually be removed

const plantList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return action.payload
    default:
      return state;
  }
};

function* getPlants(){
  try {
    const plantResponse = yield axios.get(`/api/plant`);
    yield put ({
      type: 'ADD_PLANT',
      payload: plantResponse.data
    })
  } catch (err){
    console.log('error HELP:', err)
  }
}

function* plantSaga(){
  yield takeEvery('GET_PLANTS', getPlants)
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({plantList}),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(plantSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
