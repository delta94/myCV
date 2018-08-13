const mongoose = require('mongoose');

const LanguageSchema = mongoose.Schema({
    id :{
        type: Number
    },
    name :{
        type: String
    },
    skill :{
        type: String
    },
    idcv :{
        type: String
    },
},{ _id: false });

const Language = mongoose.model('language', LanguageSchema);

module.exports = Language;