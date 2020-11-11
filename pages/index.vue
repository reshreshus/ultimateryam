<template>
  <div class="container">
    <face />
    <projects />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Face from 'components/Face.vue'
import Projects from 'components/Projects.vue'

export default Vue.extend({})
</script>

<style lang="sass" scoped>
@import '~/assets/style/all'

.container
  background: $c-bg-main
  margin: 0 auto
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  text-align: center

.subtitle
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px
  padding-bottom: 15px

.links
  padding-top: 15px
</style>
