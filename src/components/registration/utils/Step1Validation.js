export const validatePasswords = (password, confirmPassword) => {
    console.log(password, confirmPassword)
    if (password === confirmPassword){
        return true
    } else {
        return 'Passwords do not match'
    }
}   