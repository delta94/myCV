const mongoose = require('mongoose');

const EducationSchema = mongoose.Schema({
    id :{
        type: Number
    },
    name :{
        type: String
    },
    type :{
        type: String
    },
    description :{
        type: String
    },
    idcv :{
        type: String
    },
},{ _id: false });

const Education = mongoose.model('education', EducationSchema);
module.exports = Education;