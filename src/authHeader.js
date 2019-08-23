export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token_data.access_token) {
        return { 
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${user.token_data.access_token}` 
        };
    } else {
        return {};
    }
}