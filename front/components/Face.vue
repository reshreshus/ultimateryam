<template>
  <div class="face">
    <img class="face__img" alt="Logo" src="~/assets/middlebook.png">
    <div>
      <!-- <Logo /> -->
      <h1 class="face__title">
        Hey, <span class="face__ryam"> Ryam </span> here
      </h1>
      <div>
        <div class="face__location">
          <LocationIcon class="face__location-icon" />
          <span>
            Kazan, Russia
          </span>
        </div>

        <p class="face__description">
          I work and <br />
          I am okkkkkkkkkkay
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Face',
  components: {
  }

}
</script>

<style lang="sass" scoped>
@import '~/assets/style/all'

.face
  &__img
    height: 20rem
  &__title
    display: block
    font-weight: 300
    font-size: 7rem
    color: $c-text
    letter-spacing: 1px
    // -webkit-text-stroke: 1px white

  &__ryam
    font-style: italic

  &__location
    display: flex
    align-items: center
    justify-content: center
    &-icon
      height: 2rem

  &__description
    font-size: 1.7rem

</style>