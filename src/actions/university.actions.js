import { universityConstants } from '../constants'
import { universityService } from '../services'
// import { history } from '../history'
// import { authHeader } from '../authHeader'

export const universityActions = {
    getAll
}

function getAll() {
    return dispatch => {
        dispatch(request())
        universityService.getAll()
            .then(
                (universties) => {
                    console.log(universties)
                    dispatch(success(universties))
                },
                error => {
                    console.log("error", error)
                    dispatch(failure(error))
                }
            )
    }

    function request() {
        return {
            type: universityConstants.UNIVERSITY_REQUEST
        }
    }

    function success(universties) {
        return {
            type: universityConstants.UNIVERSITY_SUCCESS,
            universties
        }
    }

    function failure(error) {
        return {
            type: universityConstants.UNIVERSITY_FAILURE,
            error
        }
    }
}