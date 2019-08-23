import axios from 'axios'
import { authHeader } from '../authHeader'


export const chapterService = {
    getAll,
    createChapter
}

const API_URI = 'http://165.22.218.109'

async function getAll(id) {
    return (
        await axios.get(`${API_URI}/api/course/${id}/chapters`)
            .then(
                response => {
                    let { chapters } = response.data
                    chapters = chapters.map((chapter, index) => {
                        return {
                            ...chapter,
                            collapsed: false
                        }
                    })
                    console.log( chapters )
                    return chapters
                },
                err => {
                    const error = (err.response.data && err.response.data.message) || err.response.statusText
                    return Promise.reject(error)
                }
            )
    )
}

async function createChapter(title, description, id) {
    console.log(authHeader())
    return (
        await axios.post(`${API_URI}/api/chapter`, 
            {
                title: title, 
                description: description, 
                course_id: id
            },            
            {
                headers: authHeader()
            })
            .then(
                response => {
                    let { chapter } = response.data

                    chapter = chapter.map((chapter, index) => {
                        return {
                            ...chapter,
                            collapsed: false
                        }
                    })
                    console.log( chapter )
                    return chapter
                },
                err => {
                    const error = (err.response.data && err.response.data.message) || err.response.statusText
                    return Promise.reject(error)
                }
            )
    )
}