import {STUDENT_ADD_BOOK} from "../../../app/constants.js";

const bookInitialState = {
    student: '',
    books: []
}

export function studentBookReducer(state = bookInitialState, action) {
    switch (action.type) {
        case STUDENT_ADD_BOOK:
            return Object.assign({}, state, {
                student: action.payload.student,
                books: [...state.books, ...action.payload.book]
            })
        default:
            return state
    }
}
