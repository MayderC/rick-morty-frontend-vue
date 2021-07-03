<template lang="pug">
rm-navbar

router-view

</template>

<script>
import RmNavbar from "./components/RmNavbar.vue";

export default {
  components: {
    RmNavbar,
  },
};
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Yomogi&display=swap')

body
  font-family: 'Yomogi', cursive
  margin: 0
  height: 100vh
  background: #434465
</style>
