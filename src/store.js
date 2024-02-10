import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


function feelingValue(state = 5, action) {
  if (action.type === 'FEELINGTODAY') {  
    return state = action.payload;
  }
  return state;
}

function understandingValue(state = 5, action) {
    if (action.type === 'UNDERSTANDINGTODAY') {  
      return state = action.payload;
    }
    return state;
  }

export const store = () => createStore(
    combineReducers({
        feelingValue,
        understandingValue,
    }),
    applyMiddleware(logger)
  );

