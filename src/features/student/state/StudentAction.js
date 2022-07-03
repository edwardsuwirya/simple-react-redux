import {STUDENT_ADD_AGE, STUDENT_CHANGE_NAME} from "../../../app/constants";

export function addAgeAction() {
    return {
        type: STUDENT_ADD_AGE,
    }
}

export function changeNameAction(newName) {
    return {
        type: STUDENT_CHANGE_NAME,
        payload: {
            name: newName
        }
    }
}
