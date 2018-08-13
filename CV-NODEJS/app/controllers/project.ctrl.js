var Project = require("../model/project");

exports.CreateProject = function(req, res, next){
    Project.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.RemoveProject = function(req, res, next){
    Project.findByIdAndRemove({id: req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
}

exports.UpdateProject = function(req, res, next){
    Project.findByIdAndUpdate({id : req.params.id}, req.body).then(function(){
        Project.findOne({id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
} 

exports.GetAllProject = function(req, res, next){
    Project.find({idcv: req.params.idcv}).then(function(data){
        res.send(data);
    });
}

exports.GetProjectbyID = function(req, res, next){
    Project.findOne({idcv: req.params.idcv,id: req.params.id}).then(function(data){
        res.send(data);
    });
}