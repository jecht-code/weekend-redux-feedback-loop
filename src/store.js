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

function supportedValue(state = 5, action) {
    if (action.type === 'SUPPORTEDTODAY') {  
        return state = action.payload;
    }
    return state;
}

function commentedValue(state = '', action) {
    if (action.type === 'COMMENTEDTODAY') {  
        return state = action.payload;
    }
    return state;
}

export const store = () => createStore(
    combineReducers({
        feelingValue,
        understandingValue,
        supportedValue,
        commentedValue
    }),
    applyMiddleware(logger)
  );

