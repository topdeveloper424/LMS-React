import { courseConstants } from '../constants'

export function courseReducer(state = {}, action) {
    switch(action.type) {
        case courseConstants.COURSE_REQUEST:
            return {}
        case courseConstants.COURSE_SUCCESS:
            console.log("DDD", action.courses)
            return {
                courses: action.courses
            }
        case courseConstants.COURSE_FAILURE:
            return {
                error: action.error
            }
        case courseConstants.COURSE_CREATE_REQUEST:
            return{}
        case courseConstants.COURSE_CREATE_SUCCESS:
            return{
                course: action.course
            }
        case courseConstants.COURSE_CREATE_FAILURE:
            return{
                error: action.error
            }
        default: 
            return state
    }
}