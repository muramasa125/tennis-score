<template>
  <div>
    <b-container>
      <score />
      <counter />
      <game-setting />
    </b-container>
  </div>
</template>

<script>
import Score from '~/components/Score.vue'
import Counter from '~/components/Counter.vue'
import GameSetting from '~/components/GameSetting.vue'

export default {
  components: {
    Score,
    Counter,
    GameSetting
  }
}
</script>
<style scoped>

</style>