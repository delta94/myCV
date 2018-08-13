const mongoose = require('mongoose');

const OrganizationSchema = mongoose.Schema({
    id :{
        type: Number
    },
    name :{
        type: String
    },
    daybegin :{
        type: String
    },
    dayend :{
        type: String
    },
    type :{
        type: String
    },
    by :{
        type: String
    },
    idcv :{
        type: String
    },
},{ _id: false });

const Organization = mongoose.model('organization', OrganizationSchema);

module.exports = Organization;
