var CV  = require('../model/cv');

exports.CreateCV = function(req, res, next){
    CV.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.RemoveCV = function(req, res, next){
    CV.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.UpdateCV = function(req, res, next){
    CV.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
        CV.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
            console.log(data);
        });
    });
} 

exports.GetAllCV = function(req, res, next){
    CV.find({}).then(function(data){
        res.send(data);
    });
}

exports.GetCVbyID = function(req, res, next){
    CV.findOne({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}