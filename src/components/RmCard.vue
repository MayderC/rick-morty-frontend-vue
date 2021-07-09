<template lang="pug">
.container__item
  .container__img
    img(:src="info.image")
  .container__info
    .info
      h2 {{info.name}}
      .status__info
        div(:class="{ green: info.status == 'Alive', red: info.status == 'Dead', white : info.status == 'unknown' }").info--color
        p.info--txt 
          |{{info.status}} - {{info.species}}
    .info
      p.last-location Last known location:
      p.location-name {{info.location.name}}
    .info
      p.first-see First seen in:
      p.origin {{info.origin.name}}

</template>

<script>
export default {
  name: "RmCards",
  props: ["info"],
};
</script>

<style lang="sass">
.container__img
  height: 220px
  width: 220px

.last-location, .first-see
  padding: 0
  margin: 0


h2, .info--txt,.location-name, .origin
  padding: 0
  margin: 0
  font-weight: bold

.status__info
  display: flex
  align-items: center

.info--color
  width: 8px
  height: 8px
  border-radius: 50%
  margin: 5px

.white
  background-color: #fff
.red
  background-color: red
.green
  background-color: #2BE833

img
  max-height: 100%
  border-top-left-radius: 10px
  border-bottom-left-radius: 10px

.container__item
  margin: 10px
  padding: 10px
  height: 220px
  width: 560px
  border-radius: 10px
  background-color: #262742
  color: white
  display: flex
  justify-content: flex-start

.container__info
  padding: 0 20px
  display: flex
  flex-direction: column
  justify-content: space-evenly

@media (max-width: 650px)
  .container__item
    flex-direction: column
    min-width: 220px
    width: 220px
    height: auto
  
  img 
    border-radius: 10px

  .container__info
    padding-top: 15px
    padding-bottom: 15px


</style>
