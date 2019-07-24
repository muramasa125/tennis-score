<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="col-1 float-left">
          <div>{{ set.name }}</div>
          <div>{{ set.a }}</div>
          <div>{{ set.b }}</div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      point: true
    }
  }
}
</script>
<style scoped>
</style>
