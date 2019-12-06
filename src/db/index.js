import mongoose from 'mongoose';

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/nodeMiw',
        { autoReconnect: true, useNewUrlParser: true })
};

export let db;

export default () => {
    return new Promise((resolve, reject) => {
        db = mongoose.connection;

        db.on('connecting', () => {
            console.log('Connexion à Mongo ...');
        });

        db.on('error', (err) => {
            mongoose.disconnect();
            reject(err);
            throw new Error('Erreur de connexion à Mongo ...');
        });

        db.once('open', () => {
            console.log('Connexion à Mongo réussie ...');
            resolve();
        });

        db.on('disconnected', () => {
            setTimeout(() => {
                try {
                    connect();
                }catch (err) {
                    throw new Error('Reconnexion impossible');
                }
            }, 5000);
        });

        connect();
    });
}