const state = {
  accesToken: { exists: false, value: 'connect w/ spotify' },
  user: { exists: false },
  topTracks: { exists: false },
  topArtists: { exists: false },
}

// getterss
const getters = {}

// mutations
const mutations = {
  editAccessToken(state, accesToken) {
    if (state.accesToken.exists) {
      return
    }
    state.accesToken.value = accesToken
    state.accesToken.exists = true
    console.log('Store | editAccessToken')
  },
  editUser(state, user) {
    if (state.user.exists) {
      return
    }
    state.user.value = user
    state.user.exists = true
    console.log('Store | editUser')
  },
  editTopTracks(state, topTracks) {
    if (state.topTracks.exists) {
      return
    }
    state.topTracks.value = topTracks
    state.topTracks.exists = true
    console.log('Store | topTracks')
  },
  editTopArtists(state, topArtists) {
    if (state.topArtists.exists) {
      return
    }
    state.topArtists.value = topArtists
    state.topArtists.exists = true
    console.log('Store | topArtists')
  },
}

// actions
const actions = {
  setAccessToken ({ commit }, accesToken) {
    commit('editAccessToken', accesToken)
  },
  setStoreUser ({ commit }, user) {
    commit('editUser', user)
  },
  setStoreTopTracks ({ commit }, topTracks) {
    commit('editTopTracks', topTracks)
  },
  setStoreTopArtists ({ commit }, topArtists) {
    commit('editTopArtists', topArtists)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
