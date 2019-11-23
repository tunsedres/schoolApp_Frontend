export const setAccessToken = (state, payload) => {
  state.accessToken = payload
}

export const logout = (state) => {
  state.accessToken = ''
  state.isUserLogin = false
}

export const setIsUserLogin = (state, payload) => {
  state.isUserLogin = payload
}

export const setCurrentUser = (state, payload) => {
  state.currentUser = payload
}

export const setStudents = (state, payload) => {
  state.students.push(payload)
}

export default {
  setAccessToken,
  logout,
  setIsUserLogin,
  setCurrentUser,
  setStudents
}
