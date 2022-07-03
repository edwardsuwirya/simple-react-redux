import {combineReducers} from 'redux';
import {studentReducer} from '../features/student/state/StudentReducer';


export function rootReducer() {
    return combineReducers({
        studentReducer,
    })
}

