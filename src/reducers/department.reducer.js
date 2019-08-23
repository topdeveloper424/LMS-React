import { departmentConstants } from '../constants'

export function departmentReducer(state = {}, action) {
    switch(action.type) {
        case departmentConstants.DEPARTMENT_REQUEST:
            return {}
        case departmentConstants.DEPARTMENT_SUCCESS:
            console.log("DDD", action.departments)
            return {
                departments: action.departments
            }
        case departmentConstants.DEPARTMENT_FAILURE:
            return {
                error: action.error
            }
        default: 
            return state
    }
}