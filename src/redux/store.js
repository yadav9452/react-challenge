import {
    applyMiddleware,
    compose,
    legacy_createStore as createStore
} from 'redux';
import reducer from './reducer';

const middlewares = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(reducer, enhancer);

export default store;
