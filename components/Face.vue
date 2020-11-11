<template>
  <div class="face">
    <img class="face__img" alt="Logo" src="~/assets/middlebook.png">
    <div>
      <!-- <Logo /> -->
      <h1 class="face__title">
        Hey, Ryam here
      </h1>
      <p>
        Being weird
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '~/assets/style/all'

.face
  &__img
    height: 20rem
  &__title
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
    display: block
    font-weight: 300
    font-size: 100px
    color: $c-text
    letter-spacing: 1px

</style>