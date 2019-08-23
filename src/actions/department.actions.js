import { departmentConstants } from '../constants'
import { departmentService } from '../services'
// import { history } from '../history'
// import { authHeader } from '../authHeader'
export const departmentActions = {
    getAll
}

function getAll() {
    return dispatch => {
        dispatch(request())
        departmentService.getAll()
            .then(
                (departments) => {
                    console.log(departments)
                    dispatch(success(departments))
                },
                error => {
                    console.log("error", error)
                    dispatch(failure(error))
                }
            )
    }

    function request() {
        return {
            type: departmentConstants.DEPARTMENT_REQUEST
        }
    }

    function success(departments) {
        return {
            type: departmentConstants.DEPARTMENT_SUCCESS,
            departments
        }
    }

    function failure(error) {
        return {
            type: departmentConstants.DEPARTMENT_FAILURE,
            error
        }
    }
}