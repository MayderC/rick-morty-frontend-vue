<template lang="pug">
  
.container 
  div.container__body
    .container__item(v-for="d in data")
      p {{ d.name}}
  .container__footer
    rm-navegation-character(v-on:change="getNew")

</template>
<script>
import character from "../api/character";
import RmNavegationCharacter from "../components/RmNavegationCharacter.vue";
export default {
  name: "RmCharacter",
  components: {
    RmNavegationCharacter,
  },
  data() {
    return {
      data: [],
      info: [],
      btnPrev: null,
      btnNext: null,
      pages: null,
    };
  },

  created() {
    this.getData();
  },

  methods: {
    getNew(id) {
      let url = `https://rickandmortyapi.com/api/character/?page=${id}`;
      this.getData(url);
    },

    getData(url = null) {
      character.getCharacter(url).then((response) => {
        this.data = response.data.results;
        this.info = response.data.info;
        this.pages = this.info.count;
      });
    },
  },
};
</script>

<style lang="sass">



.container
  min-height: 70vh
  width: 85%
  margin: auto
  position: relative


  .container__footer
    margin-top: 50px
    width: 100%
    height: 80px
    position: relative
    bottom: 0
    display: flex
    align-items: center
    justify-content: center
</style>
