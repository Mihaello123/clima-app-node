const axios = require('axios');



const getClima = async ( lat, lng ) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=d44fe1466d49fd16c48f31775499a5c7&units=metric`)

    return resp.data.main.temp;
}




module.exports = {
    getClima
}