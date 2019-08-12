export const state = {
  set: null,
  game: null,
  ad: null
}
export const mutations = {
  setGameSetting(state, {set, game, ad}) {
    state.set = set
    state.game = game
    state.ad = ad
  }
}
export const actions = {
  setGameSetting({ commit }, { set, game, ad }) {
    commit('setGameSetting', {set, game, ad})
  }
}