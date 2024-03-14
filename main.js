const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));



const username = require('./routes/admin');

const addchat = require('./routes/add');

app.use(username);

app.use(addchat);

app.listen(3000);


