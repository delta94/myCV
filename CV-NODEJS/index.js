const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/cv', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

app.use(cors({origin: 'http://localhost:3000'}));

app.use('/api', require('./routes/api'));

app.listen(process.env.port || 8080, function(){
    console.log('success');
});