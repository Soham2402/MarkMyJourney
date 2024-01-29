export const verifyEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.com$/
    return emailRegex.test(email)
}

export const verifyPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/
    return passwordRegex.test(password)
}


export const verifyUsername = (username) => {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;
    return usernameRegex.test(username)
}