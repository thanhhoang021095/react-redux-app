import { createStore, applyMiddleware } from "redux";
import reducer from "reducer/index";
import thunk from 'redux-thunk';

const mainMiddleware = store => next => action => {
    store.getState();
    return next(action)
}
export const store = createStore(reducer, applyMiddleware(thunk));