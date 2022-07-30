<template lang="pug">
nav.navegation
  ul.navegation__list
    li(v-for="b, i in button").navegation__item
      router-link(:to="{ name: 'pages'}"   @click="changePage(b)").navegation__link
        div.buttons
          p(:class="{current: i == 'current' }").navegation__txt {{b}}
          p.buttons__name {{i}}
        
</template>

<script>
export default {
  name: "RmNavegationCharacter",

  props:{
    button: { type: Object, required: true},
    },
  data() {
    return {
      btnLinks: [],
    };
  },

  methods: {
    changePage(id) {
      if(!id || id == this.button.current) return
      window.scrollTo(0, 0);
      this.$emit("change", id);
    },
  },



};
</script>

<style lang="sass" scoped>


.navegation
  margin-top: 50px
  padding: 0 40px
  margin-bottom: 50px

.navegation__list
  margin: 0
  padding: 0
  display: flex
  justify-content: center
  flex-wrap: wrap
  margin: auto
  gap: 30px

.navegation__item
  list-style: none


.navegation__link
  text-decoration: none
  color: black
  font-size: 16px
  font-weight: bold


.navegation__txt
  border-radius: 5px
  margin: 0
  padding: 0
  width: 30px
  height: 30px
  text-align: center
  background-color: white

.buttons
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

.buttons__name
  color: white

.current
  box-shadow: 10px 10px 40px rgba(142, 179, 241, 0.8)

</style>
