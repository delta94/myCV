const mongoose = require('mongoose');

const SkillSchema = mongoose.Schema({
    id :{
        type: String
    },
    name :{
        type: String
    },
    number :{
        type: Number
    },
    idcv :{
        type: String
    },
},{ _id: false });

const Skill = mongoose.model('skill', SkillSchema);

module.exports = Skill;