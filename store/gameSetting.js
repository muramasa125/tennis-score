export const state = {
  gameSetting: {
    set: null,
    game: null,
    ad: null
  }
}
export const mutations = {
  setGameSetting(state, set, game, ad) {
    state.game.set = set
    state.game.game = game
    state.game.ad = ad
  }
}
export const actions = {
  setGameSetting({ commit }, { set, game, ad }) {
    commit('setGameSetting', set, game, ad)
  }
}