const mongoose = require('mongoose');

const connectMongoAtlas = async () => {
    try {
        await mongoose.connect(process.env.DB_LINK, {
            useNewUrlParser: true
        })
        await console.log('Conexion con Mongo DB Atlas exitosa');
        
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectMongoAtlas