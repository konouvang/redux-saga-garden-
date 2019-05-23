import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import logger from 'redux-logger';
import deletePlant from './modules/redux/sagas/deletePlant';

// this startingPlantArray should eventually be removed
const startingPlantArray = [
  { id: 1, name: 'Rose' },
  { id: 2, name: 'Tulip' },
  { id: 3, name: 'Oak' }
];

function* rootSaga(){
  yield takeEvery('DELETE_PLANT', deletePlant);
}

const plantList = (state = startingPlantArray, action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return [ ...state, action.payload ]
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        plantList,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
