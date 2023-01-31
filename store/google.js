/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { collection, getDocs } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'
import { db } from '../plugins/firebase'

const googleProvider = new GoogleAuthProvider()

export const state = () => {
  return {
    user: {
      userName: '',
      userEmail: '',
      userId: '',
    },
  }
}

export const mutations = {
  SET_USER(state, loginUser) {
    state.user = loginUser
  },
  OUT_USER(state) {
    state.user = {
      userName: '',
      userEmail: '',
      userId: '',
    }
  },
}

export const actions = {
  login() {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithRedirect(googleProvider)
        .then(() => resolve())
        .catch((err) => reject(err))
    })
  },
  setUser({ commit }, loginUser) {
    commit('SET_USER', loginUser)
  },
  logOut({ commit }) {
    commit('OUT_USER')
  },
}

export const getters = {
  isAuthenticated(state) {
    return !!state.user.userId
  },
}
