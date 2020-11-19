<template>
  <div class="projects">
    <div class="projects__title">
      Projects
    </div>
    <div class="projects__body">
      <div v-for="epoch in epochs" :key="epoch.title" class="projects__epoch">
        <div class="projects__epoch-title"> {{ epoch.title }} </div>
        <project v-for="project in epoch.projects" :key="project.title" :project="project" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Project from './Project.vue'

export default Vue.extend({
  components: {
    Project
  },
  data() {
    return {
      epochs: [
        {
          title: 'Working for Lipsar Studio',
          link: 'http://lipsar.studio/',
          projects: [
            {
              title: "Fekrtna",
              img: "https://vignette.wikia.nocookie.net/naruto/images/2/28/Rasengan.png/revision/latest/scale-to-width-down/700?cb=20150702135410",
              description: "Nisi mollit irure exercitation Lorem laborum mollit duis adipisicing occaecat. Nisi tempor nisi aliquip cupidatat aliquip labore anim veniam Lorem ipsum velit. Laborum Lorem laborum excepteur minim dolor non Lorem. Eiusmod sit aliquip velit occaecat excepteur nostrud culpa labore nisi nisi. Elit velit fugiat reprehenderit pariatur est consequat pariatur ex ipsum in non veniam non eiusmod.",
              technologies: {
                data: ['Nuxt', 'Sass', 'Bulma', 'Buefy']
              }
            }
          ]
        }
      ]
    }
  }
})
</script>

<style lang="sass">
@import '~/assets/style/all'

.projects
  max-width: 60%
  @include tablet
    min-width: 90%
  @include mobile
    min-width: 95%
  @include twok
    min-width: 40%

  &__title
    font-size: 4rem
    // color: $c-yellow-green-crayola
    // -webkit-text-stroke: 2px white
    font-style: italic

  &__epoch
    &-title
      text-align: left
      font-size: 2rem
      margin-left: .5rem
      padding: .3rem


</style>