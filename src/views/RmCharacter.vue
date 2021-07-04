<template lang="pug">
.container 
  div.container__body
      rm-card(v-for="d in data" :info="d",)
  .container__footer
    rm-navegation-character(v-on:change="getNew")
</template>
<script>
import character from "../api/character";
import RmNavegationCharacter from "../components/RmNavegationCharacter.vue";
import RmCard from "../components/RmCard.vue";
export default {
  name: "RmCharacter",
  components: {
    RmNavegationCharacter,
    RmCard,
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
      character
        .getCharacter(url)
        .then((response) => {
          this.data = response.data.results;
          this.info = response.data.info;
          this.pages = this.info.count;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="sass">


.container
  min-height: 70vh
  width: 100%
  margin: auto
  margin-top: 50px
  position: relative

.container__body
  display: flex
  flex-wrap: wrap
  justify-content: center

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
