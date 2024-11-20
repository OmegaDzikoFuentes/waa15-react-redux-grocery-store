import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import produceReducer from './produce.js';


const rootReducer = combineReducers({
     produce: produceReducer
})


let enhancer;

if (import.meta.env.MODE !== "production") {
    const logger = (await import("redux-logger")).default;
    const composeEnhancers =
        typeof window === "object" &&
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
         ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true })
          : compose;
      enhancer =
     composeEnhancers(applyMiddleware(logger))
}

const configureStore = (preloadedstate) => {
    return createStore(rootReducer,
        preloadedstate, enhancer);
};

export default configureStore;
