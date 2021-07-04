<template lang="pug">
  
.container 
  div.container__body
    .container__item(v-for="d in data")
      .container__img
        img(:src="d.image")
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

.container__img
  height: 100%

img
  max-height: 100%
  border-top-left-radius: 10px
  border-bottom-left-radius: 10px

.container
  min-height: 70vh
  width: 85%
  margin: auto
  margin-top: 50px
  position: relative

.container__body
  display: flex
  flex-wrap: wrap
  justify-content: center
  gap: 20px

.container__item
  padding: 10px
  height: 220px
  width: 560px
  border-radius: 10px
  background-color: #262742
  color: white


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
