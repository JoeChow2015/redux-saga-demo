import { takeEvery, select } from 'redux-saga/effects'

export function* userSaga () {
    yield takeEvery('user', function* () {
        console.log('user')
        console.log(yield select())
    })
}