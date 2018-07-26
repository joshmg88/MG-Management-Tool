import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import employeeReducer from './employeeReducer'
import jobReducer from './jobReducer'
import userReducer from './userReducer'

const combinedReducers = combineReducers({
    employee: employeeReducer,
    job: jobReducer,
    user: userReducer
})

const middlewares = applyMiddleware(promiseMiddleware())

const store = createStore(combinedReducers, middlewares)

export default store;