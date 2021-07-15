<template lang="pug">
h1 Hola Mundo Episodes
</template>

<script>
import api from "../api/episodes";
export default {
  name: "RmEpisodes",
  
  data() {
    return {
      episodes: [],
    };
  },

  created() {
    this.getEpisodesFromView();
  },

  methods: {
    getEpisodesFromView() {
      api.getEpisodes().then((response) => {
        this.episodes = response.data.results;
      });
    },
  },
};
</script>
