'use strict';

const os = require('os');
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');


const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

// Time to connect to DB
//Set up default mongoose connection
mongoose.connect(config.dbConnectionString, { useNewUrlParser: true });
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));