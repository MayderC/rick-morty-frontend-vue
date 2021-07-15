const axios = require('axios')


const getEpisodes = () =>{
    return axios.get("https://rickandmortyapi.com/api/episode")
}



export default {
    getEpisodes
}
