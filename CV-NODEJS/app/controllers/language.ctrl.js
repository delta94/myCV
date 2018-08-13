var Language = require("../model/language");

exports.CreateLanguage = function(req, res, next){
    Language.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.RemoveLanguage = function(req, res, next){
    Language.findByIdAndRemove({id: req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.UpdateLanguage = function(req, res, next){
    Language.findByIdAndUpdate({id : req.params.id}, req.body).then(function(){
        Language.findOne({id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
} 

exports.GetAllLanguage = function(req, res, next){
    Language.find({idcv: req.params.idcv}).then(function(data){
        res.send(data);
    });
}

exports.GetLanguagebyID = function(req, res, next){
    Language.findOne({idcv: req.params.idcv,id: req.params.id}).then(function(data){
        res.send(data);
    });
}