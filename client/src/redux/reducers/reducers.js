import { combineReducers } from 'redux'

import chatReducers from "./chatReducers";

export const rootReducer = combineReducers({
    chatReducers,
});