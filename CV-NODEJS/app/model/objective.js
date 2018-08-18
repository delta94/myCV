const mongoose = require('mongoose');

const ObjectiveSchema = mongoose.Schema({
    id :{
        type: String
    },
    name :{
        type: String
    },
    idcv :{
        type: String
    },
},{ _id: false });

const Objective = mongoose.model('objective', ObjectiveSchema);

module.exports = Objective;
