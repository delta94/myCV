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

function findIndex(tasks, id) {
    var result = -1;
    tasks.forEach((task, index)=>{
        if(task === id){
            result = index;
        }
    })
    return result;
}

exports.ChangePosition = function(req, res, next){
    CV.findOne({_id: req.params.id}).then(function(data){
        let index = findIndex(data.listComponent, req.body._Name);
        if(req.body._Direction === 'up' && index === 0){}
        else if(req.body._Direction === 'down' && index >= data.listComponent.length-1){}
        else if(req.body._Direction === 'down')
        {
            let temp = data.listComponent[index];
            data.listComponent[index] = data.listComponent[index + 1];
            data.listComponent[index + 1] = temp;
        }
        else {
            let temp = data.listComponent[index];
            data.listComponent[index] = data.listComponent[index - 1];
            data.listComponent[index - 1] = temp;
        }
        CV.findByIdAndUpdate({_id : req.params.id}, {'listComponent': data.listComponent}).then(function(){
            CV.findOne({_id: req.params.id}).then(function(data){
                res.send(data);
            });
        });
    })
}

exports.HiddenComponent = function(req, res, next){
    CV.findOne({_id: req.params.id}).then(function(data){
        let index = findIndex(data.listComponent, req.body._Name);
    });
}