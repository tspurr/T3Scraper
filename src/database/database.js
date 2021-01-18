const mongoose = require('mongoose');
const config = require('../config');
const dbURI = config.mongoURI;

module.exports = {
    init: () => {

        const DBOptions = {
            useNewURLParse: true,
            useUnifiedTopology: true
        };

        mongoose.connect(dbURI, DBOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        //When the bot successfully connects to the server
        mongoose.connection.on('connected', () => {
            console.log(`Mongoose Connected Successful!`)
        });

        //If the bot encounters any error trying to connect to the mongoDB
        mongoose.connection.on('err', err => {
            console.err(`Mongoose Connection Error: \n${err.stack}`);
        });

        mongoose.connection.on('disconnect', () => {
            console.log(`Mongoose Disconnected!`)
        });

    }
}