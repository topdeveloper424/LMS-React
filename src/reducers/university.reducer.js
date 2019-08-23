import { universityConstants } from '../constants'

export function universityReducer(state = {}, action) {
    switch(action.type) {
        case universityConstants.UNIVERSITY_REQUEST:
            return {}
        case universityConstants.UNIVERSITY_SUCCESS:
            console.log("DDD", action.universties)
            return {
                universties: action.universties
            }
        case universityConstants.UNIVERSITY_FAILURE:
            return {
                error: action.error
            }
        default: 
            return state
    }
}