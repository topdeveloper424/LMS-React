import { authConstants } from '../constants'
import { authService } from '../services'
import { history } from '../history'

export const authActions = {
    login,
    register,
    logout
}

function register(user) {
    return dispatch => {
        dispatch(request(user))
        authService.register(user)
            .then(
                () => {
                    dispatch(success())
                    let user = JSON.parse(localStorage.getItem('user'));
                    if( user.user_role ) {
                        if( user.user_role === 2 ) {
                            // history.push('/dashboard/teacher')
                            window.location.href = '/dashboard/teacher'
                        } 
                        if( user.user_role === 4 ) {
                            // history.push('/dashboard/admin')
                            window.location.href = '/dashboard/admin'
                        }
                    } else {
                        // history.push('/dashboard/my-courses')   
                        window.location.href = '/dashboard/my-courses'
                    }
                },
                error => {
                    dispatch(failure(error))
                }
            )
    }
    function request(user) {
        return {
            type: authConstants.REGISTER_REQUEST,
            user
        }
    }

    function success(user) {
        return {
            type: authConstants.REGISTER_SUCCESS,
            user
        }
    }

    function failure(error) {
        return {
            type: authConstants.REGISTER_FAILURE,
            error
        }
    }
}

function login(email, password) {
    return dispatch => {
        dispatch(request({email}))
        authService.login(email, password)
            .then(
                () => {
                    dispatch(success())
                    let user = JSON.parse(localStorage.getItem('user'));
                    if( user.user_role ) {
                        if( user.user_role === 2 ) {
                            window.location.href = '/dashboard/teacher'
                        } 
                        if( user.user_role === 4 ) {
                            // history.push('/dashboard/admin')
                            window.location.href = '/dashboard/admin'
                        }
                    } else {
                        window.location.href = '/dashboard/my-courses'
                        // history.push('/dashboard/my-courses')   
                    }
                },
                error => {
                    dispatch(failure(error))
                }
            )
    }
    function request(user) {
        return {
            type: authConstants.LOGIN_REQUEST,
            user
        }
    }
    function success(user) {
        return {
            type: authConstants.LOGIN_SUCCESS,
            user
        }
    }
    function failure(error) {
        return {
            type: authConstants.LOGIN_FAILURE,
            error
        }
    }
}

function logout() {
    authService.logout()
    return { type: authConstants.LOGOUT}
}