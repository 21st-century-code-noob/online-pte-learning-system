export const usernameValidator = (username: string) => {
  const regex = /^[A-Za-z]\w{5,29}$/
  return regex.test(username)
}

export const emailValidator = (email: string) => {
  const regex = /^(.+)@(.+)$/
  return regex.test(email)
}

// export const passwordValidator = (password: string) => {
//   const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/
// }
