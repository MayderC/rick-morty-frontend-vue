<template lang="pug">

footer.footer
  p Aplicación en desarrollo

</template>

<script>
export default {
  name: "RmFooter",
};
</script>

<style lang="sass" scoped>

.footer
  margin-top: 50px
  height: 150px
  width: 100%
  background-color: #262742
  box-shadow: 0px 10px 40px #15121b
  display: flex
  align-items: center
  justify-content: center

  p
    color: white
    font-size: 30px
    font-weight: bold
    text-align: center
</style>
