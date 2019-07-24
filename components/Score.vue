<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="col-1 float-left" v-for="set in sets" :key="set.name">
          <div>{{ set.name }}</div>
          <div>{{ set.a }}</div>
          <div>{{ set.b }}</div>
        </b-col>
        <b-col class="col-1 float-left">
          <div>point</div>
          <div>{{ point.a }}</div>
          <div>{{ point.b }}</div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      sets: [
        { name: 'SET1', a: 1, b: 6 },
        { name: 'SET2', a: 6, b: 3 },
        { name: 'SET3', a: 7, b: 5 }
      ],
      point: { a: 40, b: 15 }
    }
  }
}
</script>
<style scoped>
</style>
