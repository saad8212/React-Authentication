import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth';

import { combineReducers } from "redux";

const reducer = combineReducers({
 
  auth: authReducer,
});

const store =  configureStore({
  reducer,
});

export default store;


