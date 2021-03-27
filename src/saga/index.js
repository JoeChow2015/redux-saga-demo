import { all } from 'redux-saga/effects'
import { proSaga } from './proSaga'
import { userSaga } from './userSaga'

export function* defSaga () {
    yield all([proSaga(), userSaga()])
}