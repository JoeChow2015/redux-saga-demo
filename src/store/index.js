import { createStore, combineReducers, applyMiddleware } from 'redux'

import { userReducer } from '../reducers/userReducer'
import { proReducer } from '../reducers/proReducer'
import createSagaMiddleware from 'redux-saga'

import { defSaga } from '../saga'
const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    user: userReducer,
    pro: proReducer
})

export default createStore(reducer, {}, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(defSaga)