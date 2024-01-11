<template lang="pug">
main
  rm-navbar
  router-view
</template>

<script>
import RmNavbar from "./components/RmNavbar.vue";
import RmFooter from "./components/RmFooter.vue";
export default {
  components: {
    RmNavbar,
    RmFooter,
  },
};
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Yomogi&display=swap')

html
  scroll-behavior: smooth

.main
  position: relative

body
  font-family: 'Yomogi', cursive
  margin: 0
  background: #434465
</style>
