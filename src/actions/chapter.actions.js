import { chapterConstants } from '../constants'
import { chapterService } from '../services'
// import { history } from '../history'
// import { authHeader } from '../authHeader'

export const chapterActions = {
    getAll,
    createChapter
}

function getAll(course) {
    return dispatch => {
        dispatch(request())
        chapterService.getAll(course.id)
            .then(
                chapters => {
                    console.log("course", course)
                    dispatch(success(chapters))
                },
                error => {
                    console.log(error)
                    dispatch(failure(error))
                }
            )
    }

    function request() {
        return {
            type: chapterConstants.CHAPTER_REQUEST
        }
    }

    function success(chapters) {
        return {
            type: chapterConstants.CHAPTER_SUCCESS,
            chapters,
            course
        }
    }

    function failure(error) {
        return {
            type: chapterConstants.CHAPTER_FAILURE,
            error
        }
    }
}

function createChapter(title, description, id) {
    console.log("DATA", title, description, id)
    return dispatch => {
        dispatch(request())
        chapterService.createChapter(title, description, id)
            .then(
                chapter => {
                    dispatch(success(chapter))
                },
                error => {
                    console.log(error)
                    dispatch(failure(error))
                }
            )
    }

    function request() {
        return {
            type: chapterConstants.CHAPTER_CREATE_REQUEST
        }
    }

    function success(chapter) {
        return {
            type: chapterConstants.CHAPTER_CREATE_SUCCESS,
            chapter
        }
    }

    function failure(error) {
        return {
            type: chapterConstants.CHAPTER_CREATE_FAILURE,
            error
        }
    }
}