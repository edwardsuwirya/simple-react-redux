import {combineReducers} from 'redux';
import {studentReducer} from '../features/student/state/StudentReducer';
import {bookReducer} from "../features/book/state/reducers";


export function rootReducer() {
    return combineReducers({
        studentReducer,
        bookReducer,
    })
}

