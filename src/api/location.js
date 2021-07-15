const axios = require('axios');

const getLocations = () =>{
    return axios.get("https://rickandmortyapi.com/api/location")
}


export default {
    getLocations
}