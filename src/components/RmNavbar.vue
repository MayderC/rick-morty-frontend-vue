<template lang="pug">

nav.navbar
  router-link(to="/")
    .img-container 
      img(src="../assets/title.png")

  ul.navbar__list
    li.navbar__item
      router-link(to="/character" class="navbar__link")
        p Character
    li.navbar__item
      router-link(to="/location" class="navbar__link") 
        p Location
    li.navbar__item
      router-link(to="/episode" class="navbar__link")
        p Episode
</template>

<script>
export default {
  name: "RmNavbar",
};
</script>

<style lang="sass" scoped>

.img-container
  height: 90px
  display: flex
  align-items: center


img
  max-height: 60%
  transition: transform .3s


img:hover
  transform: scale(1.1)


.navbar
  width: 100%
  background-color: #262742
  display: flex
  justify-content: space-around
  box-shadow: 0px 10px 40px #15121b

.navbar__list
  padding: 0
  margin: 0
  display: flex
  align-items: center
  list-style: none
  width: 480px


.navbar__item
  width: 100%
  display: flex
  align-items: center
  justify-content: center

.navbar__link
  text-decoration: none
  position: absolute
  color: white
  font-size: 25px
  font-weight: bold
  transition: transform .2s
  height: 90px

.navbar__link:hover
  text-shadow: 0px 0px 40px #08b2c9
  transform: scale(1.1)
</style>
