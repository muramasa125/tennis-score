<template>
  <div>
    <b-button v-b-modal.gameSetting>game setting</b-button>
    <b-modal ref="modal" id="gameSetting" title="Game Setting" @ok="handleOk">
      <b-container>
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-row>
            <b-col sm="3">Player1</b-col>
            <b-col sm="7">
              <b-form-input v-model="player1" placeholder="Enter Server Name"></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="3">Player2</b-col>
            <b-col sm="7">
              <b-form-input v-model="player2" placeholder="Enter Reciever Name"></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="3">Set</b-col>
            <b-col sm="4">
              <b-form-select v-model="set" :options="setOptions"></b-form-select>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="3">Game</b-col>
            <b-col sm="4">
              <b-form-select v-model="game" :options="gameOptions"></b-form-select>
            </b-col>
            <b-col sm="4">
              <b-form-select v-model="gameCount" :options="gameCountOptions"></b-form-select>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="3">Advantage</b-col>
            <b-col sm="4">
              <b-form-select v-model="ad" :options="adOptions"></b-form-select>
            </b-col>
          </b-row>
        </form>
      </b-container>
    </b-modal>
  </div>  
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data: function () {
    return {
      player1: null,
      player2: null,
      set: 1,
      setOptions: [
        { value: 1, text: '1' },
        { value: 2, text: '2' },
        { value: 3, text: '3' }
      ],
      game: 6,
      gameOptions: [
        { value: 2, text: '2' },
        { value: 4, text: '4' },
        { value: 6, text: '6' }
      ],
      gameCount: 1,
      gameCountOptions: [
        { value: 1, text: 'Match' }
      ],
      ad: 2,
      adOptions: [
        { value: 2, text: 'Full' },
        { value: 1, text: 'Semi' },
        { value: 0, text: 'None' }
      ],
    }
  },
  methods: {
    handleOk(bvModalEvt) {
      this['game/setGameSetting']({'set': this.set, 'game': this.game, 'ad': this.ad})
      this['game/setPlayer']({'player1': this.player1, 'player2': this.player2})
    },
    ...mapActions([
      'game/setGameSetting',
      'game/setPlayer'
    ])
  }
}
</script>
<style scoped>

</style>