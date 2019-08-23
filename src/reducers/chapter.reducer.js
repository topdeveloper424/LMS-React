import { chapterConstants } from '../constants'

export function chapterReducer(state = {}, action) {
    switch(action.type) {
        case chapterConstants.CHAPTER_REQUEST:
            return {}
        case chapterConstants.CHAPTER_SUCCESS:
            
            return {
                chapters: action.chapters,
                course: action.course
            }
        case chapterConstants.CHAPTER_FAILURE:
            return {
                error: action.error
            }
        case chapterConstants.CHAPTER_CREATE_REQUEST:
            return {

            }
        case chapterConstants.CHAPTER_CREATE_SUCCESS:
            return {
                chapter: action.chapter
            }
        case chapterConstants.CHAPTER_CREATE_FAILURE:
            return {
                error: action.error
            }
        default: 
            return state
    }
}