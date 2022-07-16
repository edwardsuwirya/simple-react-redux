import {combineReducers} from 'redux';
import {studentReducer} from '../features/student/state/StudentReducer';
import {studentBookReducer} from "../features/studentBook/state/StudentBookReducer";


export function rootReducer() {
    return combineReducers({
        studentReducer,
        bookReducer: studentBookReducer,
    })
}

