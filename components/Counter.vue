<template>
  <div>
    <b-container>
      <b-row>Point</b-row>
      <b-row>
        <b-col sm="3">
          <b-button block variant="info">{{ player1 }}</b-button>
        </b-col>
        <b-col sm="3">
          <b-button block variant="success">{{ player2 }}</b-button>
        </b-col>
      </b-row>
      <b-row>Service In</b-row>
      <b-row>
        <b-col sm="3">
          <b-button block variant="info">First Service In</b-button>
        </b-col>
        <b-col sm="3">
          <b-button block variant="success">Second Service In</b-button>
        </b-col>
      </b-row>
      <b-row>Point Won</b-row>
      <b-row>
        <b-col sm="2">
          <b-button block variant="info">Service Ace</b-button>
        </b-col>
        <b-col sm="2">
          <b-button block variant="success">ForeHand Stroke</b-button>
        </b-col>
        <b-col sm="2">
          <b-button block variant="success">BackHand Stroke</b-button>
        </b-col>
        <b-col sm="2">
          <b-button block variant="warning">Net Point</b-button>
        </b-col>
        <b-col sm="2">
          <b-button block variant="danger">Un Forced Error</b-button>
        </b-col>
        <b-col sm="2">
          <b-button block variant="danger">Double Fault</b-button>
        </b-col>
      </b-row>
      <b-row>-</b-row>
      <b-row>
        <b-col>
          <b-button block variant="success" v-on:click="addPoint()">Add Point</b-button>
        </b-col>
        <b-col>
          <b-button variant="danger">UNDO</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('game', ['player1', 'player2'])
  },
  data: function () {
    return {
      pointWon: 0,
      serviceIn: 0,
      pointWonDetail: 0
    }
  },
  methods: {
    ...mapActions([
      'game/pointCount',
    ]),
    addPoint: function () {
      this['game/pointCount']({'pointWon': this.pointWon, 'serviceIn': this.serviceIn, 'pointWonDetail': this.pointWonDetail})
      this.pointWon = 0
      this.serviceIn = 0
      this.pointWonDetail = 0
    }
  }
}
</script>
<style scoped>
</style>
