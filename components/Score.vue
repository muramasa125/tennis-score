<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="3" class="float-left">
          <div>Player</div>
          <div>{{ player1 }}</div>
          <div>{{ player2 }}</div>
        </b-col>
        <b-col cols="2" class="float-left" v-for="set in sets" :key="set.name">
          <div>{{ set.name }}</div>
          <div>{{ set.a }}</div>
          <div>{{ set.b }}</div>
        </b-col>
        <b-col cols="2" class="float-left">
          <div>Point</div>
          <div>{{ point.a }}</div>
          <div>{{ point.b }}</div>
        </b-col>
        <b-col cols="3" class="float-left">
          <div>Status</div>          
          <div>{{ status.a }}</div>
          <div>{{ status.b }}</div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('game', ['player1', 'player2'])
  },
  data: function () {
    return {
      sets: [
        { name: 'Set1', a: 1, b: 6 },
        { name: 'Set2', a: 6, b: 3 },
        { name: 'Set3', a: 7, b: 5 }
      ],
      point: { a: 40, b: 15 },
      status: { a: 'Ad', b: '' }      
    }
  }
}
</script>
<style scoped>
</style>
