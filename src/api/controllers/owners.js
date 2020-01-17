const task = require('../models/owners.js');
const uuidvalidator = require('is-uuid');


exports.createOwner = function(req,res){

    let validate = true;
    let message = ``;
    if(req.body.name == null || req.body.address == null || req.body.phone == null || req.body.email == null ){
        validate = false;
        message = `No complete params found`  
        }
        if(validate){
            task.createOwner(req,res);
        }else{
            res.status(400).send({
                message : message
            }) 
        }
}

exports.getAllOwners = function(req,res){
    task.getOwners(req,res);
}

exports.getAOwner = function(req,res){
    let message = ``;
    let validate = true;

    if(!uuidvalidator.v4(req.params.id) ){
        validate = false;
        message = `No id found`  
    }
    
    if(validate){
        task.getOwner(req,res);
    }else{
        res.status(400).send({
            message : message
        })   
    }
}

exports.updateOwner = function(req,res){
    let message = ``;
    let validate = true;

    if(!uuidvalidator.v4(req.params.id) ){
        validate = false;
        message = `No id found`  
    }
    
    if(validate){
        task.putOwner(req,res)
    }else{
        res.status(400).send({
            message : message
        })   
    }
    

}