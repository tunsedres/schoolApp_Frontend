import axios from 'axios'

export const registerUser = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('/api/register', payload)
      .then(
        res => {
          if (res.data.status === 'success') {
            commit('setAccessToken', res.data.token.access_token)
            localStorage.setItem('token', res.data.token.access_token)
            commit('setIsUserLogin', true)
            commit('setCurrentUser', res.data.data)
          }
          resolve(res)
        }
      )
      .catch(error => {
        resolve(error)
      })
  })
}

export const authUser = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('/api/login', payload)
      .then(
        res => {
          if (res.data.status === 'success') {
            commit('setAccessToken', res.data.token.access_token)
            localStorage.setItem('token', res.data.token.access_token)
            commit('setIsUserLogin', true)
            commit('setCurrentUser', res.data.data)
          }
          resolve(res)
        })
      .catch(() => reject)
  })
}

export const checkUser = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios.get('/api/profile', payload)
      .then(
        res => {
          if (res.data) {
            commit('setIsUserLogin', true)
            commit('setCurrentUser', res.data.data)
          }
          resolve(res)
        })
      .catch(error => console.log(error))
  })
}

export const logout = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    commit('logout')
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    resolve()
  })
}

export const addStudent = ({ commit }, payload) => {
  axios.post('/api/students', payload)
}

export const addStudentByAdmin = ({ commit }, payload) => {
  axios.post('/api/admin/students', payload)
    .then(res => {
      commit('setStudents', res.data)
    })
}

export default {
  registerUser,
  logout,
  addStudent,
  authUser,
  checkUser,
  addStudentByAdmin
}
