const axios = require('axios')


// Return promise
function getCharacter(url) {
  return axios.get(url || "https://rickandmortyapi.com/api/character")
}

export default {
  getCharacter
}