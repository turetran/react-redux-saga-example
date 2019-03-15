import { combineReducers } from 'redux'
import * as Actions from '../Actions'

const ChangeMyAge = (state={myage: 30, changes: 0}, action) => {
    switch (action.type) {
        case Actions.CHANGE_MYAGE:
            return {myage: action.myage, changes: action.changes};
        default:
            return state;
    }
}

export default combineReducers({
    ChangeMyAge
})
