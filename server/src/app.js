const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
//routes
const user = require('./routes/user');
const note = require('./routes/note');
 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/users', user);
app.use('/api/notes', note);

module.exports = app;
