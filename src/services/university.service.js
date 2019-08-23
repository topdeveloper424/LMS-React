import axios from 'axios'

export const universityService = {
    getAll
}

const API_URI = 'http://165.22.218.109'

async function getAll() {
    return (
        await axios.get(`${API_URI}/api/university/all`)
            .then(
                response => {
                    let { universties } = response.data
                    return universties
                },
                err => {
                    const error = (err.response.data && err.response.data.message) || err.response.statusText
                    return Promise.reject(error)
                }
            )
    )
}
