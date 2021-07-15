<template lang="pug">
nav.buttom
  ul.buttom__list
    li(v-for="b in button").buttom__item
      router-link(:to="{ name: 'pages'}" @click="changePage(b)").buttom__link 
        p.buttom__txt {{b}}

        
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

  computed:{
    


  },

  created() {

    console.log(this.button.next)
    
  },


  methods: {
    changePage(id) {
      //window.scrollTo(0, 0);
      console.log(this.button.current)
      this.$emit("change", id);
    },
  },



};
</script>

<style lang="sass" scoped>

.buttom
  margin-top: 50px
  padding: 0 40px
  margin-bottom: 50px

.buttom__list
  margin: 0
  padding: 0
  display: flex
  justify-content: space-around
  flex-wrap: wrap
  margin: auto
  gap: 20px

.buttom__item
  list-style: none


.buttom__link
  text-decoration: none
  color: black
  font-size: 16px
  font-weight: bold


.buttom__txt
  border-radius: 5px
  margin: 0
  padding: 0
  width: 30px
  height: 30px
  text-align: center
  background-color: white
</style>
