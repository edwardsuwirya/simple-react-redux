import {STUDENT_ADD_AGE, STUDENT_CHANGE_NAME} from "../../../app/constants";

const studentInitialState = {
    name: '',
    age: 0
}

export function studentReducer(state = studentInitialState, action) {
    switch (action.type) {
        case STUDENT_ADD_AGE:
            return Object.assign({}, state, {
                age: state.age + 1
            })
        case STUDENT_CHANGE_NAME:
            return Object.assign({}, state, {
                name: action.payload.name
            })
        default:
            return state
    }
}
