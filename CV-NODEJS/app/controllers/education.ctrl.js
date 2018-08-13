var Education = require("../model/education");

exports.CreateEducation = function(req, res, next){
    Education.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.RemoveEducation = function(req, res, next){
    Education.findByIdAndRemove({id: req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.UpdateEducation = function(req, res, next){
    Education.findByIdAndUpdate({id : req.params.id}, req.body).then(function(){
        Education.findOne({id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
} 

exports.GetAllEducation = function(req, res, next){
    Education.find({idcv: req.params.idcv}).then(function(data){
        res.send(data);
    });
}

exports.GetEducationbyID = function(req, res, next){
    Education.findOne({idcv: req.params.idcv,id: req.params.id}).then(function(data){
        res.send(data);
    });
}