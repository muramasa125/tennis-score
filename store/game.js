export const state = {
  set: null,
  game: null,
  ad: null,
  points: []
}
export const mutations = {
  setGameSetting(state, {set, game, ad}) {
    state.set = set
    state.game = game
    state.ad = ad
  },
  pointCount(state, point) {
    state.points.push(point)
  }
}
export const actions = {
  setGameSetting({ commit }, { set, game, ad }) {
    commit('setGameSetting', {set, game, ad})
  },
  pointCount({ commit }, point) {
    commit('pointCount', point)
  }
}
