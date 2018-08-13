const mongoose = require('mongoose');

const ReferenceSchema = mongoose.Schema({
    id :{
        type: Number
    },
    name :{
        type: String
    },
    day :{
        type: String
    },
    phone :{
        type: String
    },
    email :{
        type: String
    },
    idcv :{
        type: String
    }
},{ _id: false });

const Reference = mongoose.model('reference', ReferenceSchema);

module.exports = Reference;
