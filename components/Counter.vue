<template>
  <div>
    <b-container>
      <b-row>Point Won</b-row>
      <b-row>
        <b-col sm="3">
          <b-button block variant="info" @click="setPointWon(1)" :disabled="pointWonPlayer1">{{ player1 }}</b-button>
        </b-col>
        <b-col sm="3">
          <b-button block variant="success" @click="setPointWon(2)" :disabled="pointWonPlayer2">{{ player2 }}</b-button>
        </b-col>
      </b-row>
      <b-row>Service In</b-row>
      <b-row>
        <b-col sm="3">
          <b-button block variant="info" @click="setServiceIn(1)" :disabled="firstServiceIn">First Service In</b-button>
        </b-col>
        <b-col sm="3">
          <b-button block variant="success" @click="setServiceIn(2)" :disabled="secondServiceIn">Second Service In</b-button>
        </b-col>
        <b-col sm="3">
          <b-button block variant="danger" @click="setServiceIn(3)" :disabled="doubleFault">Double Fault</b-button>
        </b-col>
      </b-row>
      <b-row>Point Won Detail</b-row>
      <b-row>
        <b-col sm="3">
          <b-button block variant="info" @click="setPointDetail(1)" :disabled="serviceAce">Service Ace</b-button>
        </b-col>
        <b-col sm="3">
          <b-button block variant="success" @click="setPointDetail(2)" :disabled="foreHand">ForeHand Winner</b-button>
        </b-col>
        <b-col sm="3">
          <b-button block variant="success" @click="setPointDetail(3)" :disabled="backHand">BackHand Winner</b-button>
        </b-col>
        <b-col sm="3">
          <b-button block variant="warning" @click="setPointDetail(4)" :disabled="netPoint">Net Point</b-button>
        </b-col>
        <b-col sm="3">
          <b-button block variant="danger" @click="setPointDetail(5)" :disabled="unForcedError">Un Forced Error</b-button>
        </b-col>
      </b-row>
      <b-row>-</b-row>
      <b-row>
        <b-col>
          <b-button block variant="success" v-on:click="addPoint()" :disabled="disabledAddPoint">Add Point</b-button>
        </b-col>
        <b-col>
          <b-button variant="danger" disabled>UNDO</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('game', ['player1', 'player2']),
    pointWonPlayer1: function () {
      return !(this.pointWon === 0 || this.pointWon != 1)
    },
    pointWonPlayer2: function () {
      return !(this.pointWon === 0 || this.pointWon != 2)
    },
    firstServiceIn: function () {
      return !(this.serviceIn === 0 || this.serviceIn != 1)
    },
    secondServiceIn: function () {
      return !(this.serviceIn === 0 || this.serviceIn != 2)
    },
    doubleFault: function () {
      return !(this.serviceIn === 0 || this.serviceIn != 3)
    },
    serviceAce: function () {
      return !(this.pointWonDetail === null || this.pointWonDetail != 'ServiceAce') || this.serviceIn === 3
    },
    foreHand: function () {
      return !(this.pointWonDetail === null || this.pointWonDetail != 'ForeHandWinner') || this.serviceIn === 3
    },
    backHand: function () {
      return !(this.pointWonDetail === null || this.pointWonDetail != 'BackHandWinner') || this.serviceIn === 3
    },
    netPoint: function () {
      return !(this.pointWonDetail === null || this.pointWonDetail != 'NetPoint') || this.serviceIn === 3
    },
    unForcedError: function () {
      return !(this.pointWonDetail === null || this.pointWonDetail != 'UnForcedError') || this.serviceIn === 3
    },
    disabledAddPoint: function () {
      return this.pointWon === 0
    },
  },
  data: function () {
    return {
      pointWon: 0,
      serviceIn: 0,
      pointWonDetail: null
    }
  },
  methods: {
    ...mapActions([
      'game/pointCount',
    ]),
    setPointWon: function (player) {
      this.pointWon = player
    },
    setServiceIn: function (service) {
      if (this.serviceIn === service) {
        this.serviceIn = 0
        return
      }
      this.serviceIn = service
      if (service === 3) {
        this.pointWonDetail = null
      }
    },
    setPointDetail: function (detail) {
      switch (detail) {
        case 1:
          this.pointWonDetail = 'ServiceAce'
          break;
        case 2:
          this.pointWonDetail = 'ForeHandWinner'
          break;
        case 3:
          this.pointWonDetail = 'BackHandWinner'
          break;
        case 4:
          this.pointWonDetail = 'NetPoint'
          break;
        default:
          this.pointWonDetail = 'UnForcedError'
          break;
      }
    },
    addPoint: function () {
      this['game/pointCount']({'pointWon': this.pointWon, 'serviceIn': this.serviceIn, 'pointWonDetail': this.pointWonDetail})
      this.pointWon = 0
      this.serviceIn = 0
      this.pointWonDetail = null
    }
  }
}
</script>
<style scoped>
</style>
