<template>
  <div>
    <b-container>
      <b-row>Point</b-row>
      <b-row>
        <b-col sm="3">
          <b-button block variant="info">{{ player1 }}</b-button>
        </b-col>
        <b-col sm="3">
          <b-button block>{{ player2 }}</b-button>
        </b-col>
      </b-row>
      <b-row>Service In</b-row>
      <b-row>
        <b-col sm="3">
          <b-button block variant="info">First Service In</b-button>
        </b-col>
        <b-col sm="3">
          <b-button block>Second Service In</b-button>
        </b-col>
      </b-row>
      <b-row><b-button  variant="danger">UNDO</b-button></b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      player1: 'aaa',
      player2: 'bbb',
      point: true
    }
  }
}
</script>
<style scoped>
</style>
