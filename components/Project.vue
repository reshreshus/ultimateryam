
<template>
  <div class="project">
    <div class="project__title"> {{ project.title }} </div>
    <div class="project__body">
      <img class="project__img" :src="project.img" alt="Project Image">
      <div class="project__desc">
        <div class="project__text"> {{ project.description }}</div>
        <div class="project__technologies">
          <!-- <ul> -->
            <div v-for="tech of project.technologies" :key="tech" class="project__technology">
              #{{ tech }}
            </div>
          <!-- </ul> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    project: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="sass">
@import '~/assets/style/all'

.project
  border: 1px solid white
  border-radius: 5px
  display: flex
  flex-direction: column
  // overflow: hidden
  background: white
  &__title
    border-bottom: 1px solid $c-bg-main
    padding: .5rem
    text-align: left
    font-size: 2rem
    color: #160C28
  &__body
    padding: .5rem
    display: flex
    min-height: 5rem
  &__img
    min-width: 17rem
    flex: 0 2 5rem
    object-fit: cover
    min-height: 5rem
    @include mobile
      min-width: 10rem
  &__desc
    flex: 1 2 5rem
    min-height: 5rem
  &__text
    margin-left: 1rem
    text-align: left
  &__technologies
    display: flex
    justify-content: left
    align-items: center
  &__technology
    &:first-child
      margin-left: 1rem
    &:not(:first-child)
      margin-left: .3rem

</style>