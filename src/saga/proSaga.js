import { takeEvery, select } from 'redux-saga/effects'

export function* proSaga () {
    yield takeEvery('pro', function* () {
        console.log('pro')
        console.log(yield select(state => state.pro))
    })
}