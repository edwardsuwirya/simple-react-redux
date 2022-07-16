import {STUDENT_ADD_BOOK} from '../../../app/constants.js';

export function addBookAction(bookSelected) {
    return {
        type: STUDENT_ADD_BOOK,
        payload: {
            student: bookSelected.student,
            book: bookSelected.book
        }
    }
}
