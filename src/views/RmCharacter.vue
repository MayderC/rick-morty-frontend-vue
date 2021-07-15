<template lang="pug">

.container 
  rm-navegation-character(v-on:change="getNew" v-bind:button="buttons")
  div.container__body
      rm-card(v-for="d in data" :info="d",)

  .container__footer
    rm-navegation-character(v-on:change="getNew" v-bind:button="buttons")


    
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
      buttons: {
        first : 1,
        prev: null,
        current: 0,
        next : 0,
        latest : 34
      }
    };
  },
  watch: {
    /**
     * Cuando se actualiza o se ingresa un valor en info, que contiene informacion de la paginacion
     * el objeto buttons adquiere los nuevos valores para pasarlo por props al componente de navengacion/paginacion
     * 
     */
    info(){
      // Muy lento buscar otro forma
       this.updateButtonsNav()
    }
  },
  created() {
    this.getData();
  },

  methods: {
    getNew(id) {
      let url = `https://rickandmortyapi.com/api/character/?page=${id}`;
      this.getData(url);
      this.updateButtonsNav();
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

    //Esta funcion se llama en created y en el evento emitido por el componente hijo
    //RmNavegationCharacter,
    updateButtonsNav(){
      // Funcion wtacher de info, informacion de botontes, next y prev
      // tambien se usa cuando se da click desde el componente hijo, para actualizar 
      // de nuevo los botones ya que cambien en cada click segun la pag, seleccionada.
      if(this.info.next){
        
        // se extrae ultimo digito de la url  y de la pagina siguiente,
        // de esta manera se obtiene el actual cuando existe el siguiente.
        let current = this.info.next.split("=")[1]-1;
        this.buttons.current = current
        this.buttons.next = current+1

        // define los valres de prev, cuando no existe porque el actual es el primero, es null
        // en cada iteracion cuando si existe sera el actual -1
        if(current >= 2)this.buttons.prev = current -1
        if(current == 1)this.buttons.prev = null

      }else if(!this.info.next && this.info.prev){



        let current = parseInt(this.info.prev.split("=")[1])+1
        this.buttons.prev = current-1
        this.buttons.current = current

        if(current ==34)this.buttons.next = null

      }
    }


  },



};
</script>

<style lang="sass">


.container
  padding-top: 50px
  min-height: 70vh
  width: 100%
  margin: auto
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
