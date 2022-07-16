import {STUDENT_ADD_BOOK} from '../../../app/constants.js';

export function addStudentBookAction(bookSelected) {
    return {
        type: STUDENT_ADD_BOOK,
        payload: {
            student: bookSelected.student,
            book: bookSelected.book
        }
    }
}
