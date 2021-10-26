export const usernameValidator = (username:string) => {
    const regex: RegExp = /^[A-Za-z]\w{5,29}$/
    return regex.test(username)
}

export const emailValidator = (email:string) => {
    const regex: RegExp = /^(.+)@(.+)$/
    return regex.test(email)
}

export const passwordValidator = (password:string) => {
    const regex: RegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/
}