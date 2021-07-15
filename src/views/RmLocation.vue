<template lang="pug">
h1 Hola Mundo desde location
</template>


<script>
import api from "../api/location";
export default {
  name: "RmLocation",

  data() {
    return {
      locations: [],
    }
  },

  created() {
    this.getLocationFromView();
  },

  methods: {
    getLocationFromView() {
      api.getLocations().then((response) => {
    
        this.locations = response.data.results;
      });
    },
  },
};
</script>