<template>
  <div>
    <b-container>
      <score />
      <counter />
    </b-container>
  </div>
</template>

<script>
import Score from '~/components/Score.vue'
import Counter from '~/components/Counter.vue'

export default {
  components: {
    Score,
    Counter
  }
}
</script>
<style scoped>

</style>