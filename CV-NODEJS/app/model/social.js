const mongoose = require('mongoose');

const SocialSchema = mongoose.Schema({
    id :{
        type: Number
    },
    name :{
        type: String
    },
    idcv :{
        type: String
    },
},{ _id: false });

const Social = mongoose.model('social', SocialSchema);

module.exports = Social;