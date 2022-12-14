import { createStore, applyMiddleware } from "redux";
import reducers from "./reducer"
import { compose } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

console.log(store.getState())
