export const state = {
  player1: null,
  player2: null,
  set: null,
  game: null,
  ad: null,
  points: []
}
export const mutations = {
  setPlayer(state, {player1, player2}) {
    state.player1 = player1
    state.player2 = player2
  },
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
  setPlayer({ commit }, { player1, player2 }) {
    commit('setPlayer', {player1, player2})
  },
  setGameSetting({ commit }, { set, game, ad }) {
    commit('setGameSetting', {set, game, ad})
  },
  pointCount({ commit }, point) {
    commit('pointCount', point)
  }
}
