import axios from 'axios'

export const departmentService = {
    getAll
}

const API_URI = 'http://165.22.218.109'

async function getAll() {
    return (
        await axios.get(`${API_URI}/api/department/all`)
            .then(
                response => {
                    let { departments } = response.data
                    console.log( departments )
                    return departments
                },
                err => {
                    const error = (err.response.data && err.response.data.message) || err.response.statusText
                    return Promise.reject(error)
                }
            )
    )
}
