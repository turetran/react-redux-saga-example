import { put, takeEvery, all } from 'redux-saga/effects';
import * as Actions from '../Actions'

function* changeMyAge(action){
    console.log("TestAction")
    localStorage.setItem('myage', action.myage)
    localStorage.setItem('changes', action.changes)
    yield put(Actions.ChangeMyAge(action.myage,action.changes))
}

function* watchChangeMyAge() {
    console.log("TestMiddleware")
    yield takeEvery(Actions.CHANGE_MYAGE_SAGA, changeMyAge)
}

export default function* rootSaga() {
    yield all([
        watchChangeMyAge(),
    ])
}
