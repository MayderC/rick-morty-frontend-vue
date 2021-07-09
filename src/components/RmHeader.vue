<template lang="pug">

.header
  .header__item
    img(src="../assets/morty.png").header__img
  .header__item.item--txt
    p.header__txt Aplicación web desarrollada en Vuejs para consumir 
      |la api publica de Rick and Morty, app creada por 
      a(href="https://mayder.codes/" target="_blank" ).header__link @MayderC

</template>

<script>
export default {
  name: "RmHeader",
};
</script>

<style lang="sass" scoped>
.header
  width: 80%
  margin: auto
  min-height: 90vh
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  align-items: center

.header__item
  width: 600px
  min-width: 400px
  height: 100%
  padding: 30px
  display: flex
  align-items: center
  justify-content: center

.header__txt
  text-align: center

.header__link
  color: white
  text-decoration: none

.header__link:hover
    text-shadow: 0px 0px 40px #08b2c9
    transform: scale(2)

.header__img
  max-width: 60%

.header__txt
  color: #fff
  font-size: 30px



@media (max-width: 650px)
  .header__item
    width: 300px
    min-width: 250px

@media (max-width: 350px)
  .header__item
    width: 260px
    min-width: 230px
</style>
