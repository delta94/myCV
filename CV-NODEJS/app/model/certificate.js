const mongoose = require('mongoose');

const CertificateSchema = mongoose.Schema({
    id :{
        type: Number
    },
    name :{
        type: String
    },
    day :{
        type: String
    },
    content :{
        type: String
    },
    idcv :{
        type: String
    },
},{ _id: false });

const Certificate = mongoose.model('certificate', CertificateSchema);

module.exports = Certificate;
