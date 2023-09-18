// Using older react-redux pattern for state management
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../features/reducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

export default store;
