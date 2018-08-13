const mongoose = require('mongoose');

const CVSchema = mongoose.Schema({
    _id :{
        type: Number
    },
    name :{
        type: String
    },
    yourName :{
        type: String
    },
    language :{
        type: String
    },
    color :{
        type: String
    },
    font :{
        type: String
    },
    size :{
        type: String
    },
    arrow :{
        type: String
    },
    day :{
        type: String
    },
    address :{
        type: String
    },
    phone :{
        type: String
    },
    email :{
        type: String
    },
    choose :{
        type: String
    },
    idme :{
        type: String
    },
},{ _id: false });

const CV = mongoose.model('cv', CVSchema);

module.exports = CV;
