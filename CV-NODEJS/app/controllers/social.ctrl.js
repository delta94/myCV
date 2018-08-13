var Social = require("../model/social");

exports.CreateSocial = function(req, res, next){
    Social.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.RemoveSocial = function(req, res, next){
    Social.findByIdAndRemove({id: req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.UpdateSocial = function(req, res, next){
    Social.findByIdAndUpdate({id : req.params.id}, req.body).then(function(){
        Social.findOne({id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
} 

exports.GetAllSocial = function(req, res, next){
    Social.find({idcv: req.params.idcv}).then(function(data){
        res.send(data);
    });
}

exports.GetSocialbyID = function(req, res, next){
    Social.findOne({idcv: req.params.idcv,id: req.params.id}).then(function(data){
        res.send(data);
    });
}