import express from "express";
// import { MongoClient, ServerApiVersion } from "mongodb";
const app = express();
const port = 4000;



// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const dbName = 'monProjetMongo';
// MongoClient.connect(url, function (err, client) {
//     console.log("Connecté à MongoDB");
//     const db = client.db(dbName);
//     client.close();
// });
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://127.0.0.1:27017/Etudiants', function (err) { 
     if (err) throw err; console.log('Successfully connected avec db'); });

// mongoose.connect(db_url,{ useNewUrlParser: true }, function (err) { 
// if (err) throw err; console.log('Successfully connected'); });

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {  console.log("connecté à Mongoose")});

app.get("/", (_, res) => {
    res.send('serveur demarrer hello testesetest teste')
})
app.listen(port, () => {
    console.log('serveur demarrer')
})