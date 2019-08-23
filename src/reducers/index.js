import { combineReducers } from 'redux'
import { register } from './register.reducer'
import { authentication } from './authentication.reducer'
import { departmentReducer } from './department.reducer'
import { universityReducer } from './university.reducer'
import { courseReducer } from './course.reducer'
import { chapterReducer } from './chapter.reducer'

const rootReducer = combineReducers({
    register,
    authentication,
    departmentReducer,
    universityReducer,
    courseReducer,
    chapterReducer
})

export default rootReducer