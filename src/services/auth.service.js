import axios from 'axios'

export const authService = {
    login,
    register,
    logout
}

const API_URI = 'http://165.22.218.109'

async function login(email, password) {
    console.log(email, password)
    await axios.post(`${API_URI}/api/login`, {email: email, password: password})
        .then(
                response => {
                    let user = response.data
                    localStorage.setItem('user', JSON.stringify(user))
                    return user
                }, 
                err => {
                    if(err.response.status === 401) {
                        logout()
                    }
                    const error = (err.response.data && err.response.data.message) || err.response.statusText
                    return Promise.reject(error)
                }
        )
}

async function register(user) {
    await axios.post(`${API_URI}/api/register`, user)
        .then(
                response => {
                    const user = response.data
                    localStorage.setItem('user', JSON.stringify(user))
                    return user
                }, 
                err => {
                    if(err.response.status === 401) {
                        logout()
                    }

                    let error = (err.response.data && (err.response.data.errors.email) ) || err.response.statusText

                    return Promise.reject(error)
                }
        )
}

function logout() {
    localStorage.removeItem('user');
}