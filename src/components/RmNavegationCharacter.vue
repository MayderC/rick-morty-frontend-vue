<template lang="pug">
nav.buttom
  ul.buttom__list
    li(v-for="b in btnLinks").buttom__item
      router-link(:to="{ name: 'pages'}" @click="changePage(b+1)").buttom__link 
        p.buttom__txt {{b+1}}

        
</template>

<script>
export default {
  name: "RmNavegationCharacter",
  created() {
    const n = 34;
    var arr = Array.from(Array(n).keys(+1));
    this.btnLinks = arr;
  },
  data() {
    return {
      btnLinks: [],
      current: null,
    };
  },

  methods: {
    changePage(id) {
      this.$emit("change", id);
    },
  },

  props: [],
};
</script>

<style lang="sass" scoped>

.buttom
  margin-top: 50px

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
