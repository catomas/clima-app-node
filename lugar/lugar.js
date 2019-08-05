const axios = require('axios');

const getLugarlatng = async(dir) => {

    const encodeUlr = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}&X-RapidAPI-Key=5be874a148msh7c57e6fdc1fd34fp19078bjsn281fb4b3ed08`,
        headers: { 'X-RapidAPI-Key': '5be874a148msh7c57e6fdc1fd34fp19078bjsn281fb4b3ed08' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`NO hay resultados para ${ dir }`);


    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarlatng
}