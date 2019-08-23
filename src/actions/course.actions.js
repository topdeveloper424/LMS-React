import { courseConstants } from '../constants'
import { courseService } from '../services'
import { history } from '../history'
// import { authHeader } from '../authHeader'

export const courseActions = {
    getAll,
    createCourse,
    updateCourse
}

function getAll() {
    return dispatch => {
        dispatch(request())
        courseService.getAll()
            .then(
                (courses) => {
                    console.log(courses)
                    dispatch(success(courses))
                },
                error => {
                    console.log("error", error)
                    dispatch(failure(error))
                }
            )
    }

    function request() {
        return {
            type: courseConstants.COURSE_REQUEST
        }
    }

    function success(courses) {
        return {
            type: courseConstants.COURSE_SUCCESS,
            courses
        }
    }

    function failure(error) {
        return {
            type: courseConstants.COURSE_FAILURE,
            error
        }
    }
}

function createCourse(university_id, department_id, courseName, old_price, price, description, logo_url) {
    // console.log(university_id, department_id, courseName, old_price, price, description, logo_url)
    return dispatch => {
        dispatch(request())
        courseService.createCourse(university_id, department_id, courseName, old_price, price, description, logo_url)
            .then(
                (course) => {
                    dispatch(success(course))
                    console.log("COURSE", course)
                    history.push({
                        pathname: `/dashboard/course/${course.id}`,
                        state: {
                            course: course
                        }
                    })
                },
                error => {
                    console.log(error)
                    dispatch(failure(error))
                }
            )
    }

    function request() {
        return {
            type: courseConstants.COURSE_CREATE_REQUEST
        }
    }

    function success(course) {
        return {
            type: courseConstants.COURSE_CREATE_SUCCESS,
            course
        }
    }

    function failure(error) {
        return {
            type: courseConstants.COURSE_CREATE_FAILURE,
            error
        }
    }
}

function updateCourse() {
    
}