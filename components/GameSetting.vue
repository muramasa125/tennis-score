<template>
  <div>
    <b-button v-b-modal.gameSetting>game setting</b-button>
    <b-modal id="gameSetting" title="Game Setting">
      <b-container>
        <b-row>
          <b-col sm="2">Set</b-col>
          <b-col sm="4">
            <b-form-select v-model="set" :options="setOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="2">Geme</b-col>
          <b-col sm="4">
            <b-form-select v-model="game" :options="gameOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="2">Advantage</b-col>
          <b-col sm="4">
            <b-form-select v-model="ad" :options="adOptions"></b-form-select>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>  
</template>
<script>
export default {
  data: function () {
    return {
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
      ad: 2,
      adOptions: [
        { value: 2, text: 'Full' },
        { value: 1, text: 'Semi' },
        { value: 0, text: 'None' }
      ],
    }
  }
}
</script>
<style scoped>

</style>
