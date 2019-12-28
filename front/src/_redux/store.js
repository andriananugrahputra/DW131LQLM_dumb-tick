import { createStore, combineReducers, applyMiddleware } from "redux";

// import { counter } from "../_reducers/counter";
// import { users } from "../_reducers/users";
import {categories} from "../_reducers/categories";
import {events} from '../_reducers/events'

import { logger, promise } from "./middleware";

//Get All reducers available
//Global State come from here
const rootReducers = combineReducers({
  // counter,
  // users
  events,
  categories
});

//Setup Store Redux
const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store;