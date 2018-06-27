import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger'; //makes development easier for react purposes


const addReducer = (state = [], action) => {
    console.log('hello');
    if(action.type === 'ADD_SNACK'){
        console.log('im a snackie', action);
        return [...state, action.payload];
    }
    return state;
}



const storeInstance = createStore(
    combineReducers({
        addReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
