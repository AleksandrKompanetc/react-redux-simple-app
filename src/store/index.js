import { createStore } from "redux"
import { cashReducer } from "./cashReducer"
import { customerReducer } from "./customerReducer"
import { combineReducers } from "redux"

export const store = createStore(cashReducer)