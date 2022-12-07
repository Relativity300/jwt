const mongoose = require('mongoose');
const DBConection = async () =>{
    try {
        mongoose.connect(process.env.MONGO);
        console.log("Conexión exitosa");
    } catch (error) {
        console.log("Error de conexión: "+error)
    }
}
module.exports = {
    DBConection
}