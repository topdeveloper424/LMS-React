import axios from 'axios'
import {authHeader} from '../authHeader'

export const courseService = {
    getAll,
    createCourse
}

const API_URI = 'http://165.22.218.109'

async function getAll() {
    return (
        await axios.get(`${API_URI}/api/course/all`)
            .then(
                response => {
                    let { courses } = response.data
                    console.log( courses )
                    return courses
                },
                err => {
                    const error = (err.response.data && err.response.data.message) || err.response.statusText
                    return Promise.reject(error)
                }
            )
    )
}

// async function createCourse(university_id, department_id, courseName, old_price, price, description, logo_url) {
async function createCourse(data) {
    return (
        await axios.post(`${API_URI}/api/course`,
            data,
            { 
                headers: authHeader() 
            })
            .then(
                response => {
                    let { course } = response.data
                    console.log( course )
                    return course
                },
                err => {
                    console.log("there", authHeader())
                    const error = (err.response.data && err.response.data.message) || err.response.statusText
                    return Promise.reject(error)
                }
            )
    )
}
