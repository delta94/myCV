const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
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

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;
