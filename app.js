const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');




const getInfo = async(direccion) => {

    try {

        const cordenadas = await lugar.getLugarlatng(direccion);
        const climaLugar = await clima.getClima(cordenadas.lat, cordenadas.lng);

        return `El clima de ${ cordenadas.direccion} es de ${climaLugar}.`;

    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion}`;
    }




}



getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);