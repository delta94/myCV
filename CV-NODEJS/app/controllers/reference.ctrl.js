var Reference = require("../model/reference");

exports.CreateReference = function(req, res, next){
    Reference.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.RemoveReference = function(req, res, next){
    Reference.findByIdAndRemove({id: req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.UpdateReference = function(req, res, next){
    Reference.findByIdAndUpdate({id : req.params.id}, req.body).then(function(){
        Reference.findOne({id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
} 

exports.GetAllReference = function(req, res, next){
    Reference.find({idcv: req.params.idcv}).then(function(data){
        res.send(data);
    });
}

exports.GetReferencebyID = function(req, res, next){
    Reference.findOne({idcv: req.params.idcv,id: req.params.id}).then(function(data){
        res.send(data);
    });
}