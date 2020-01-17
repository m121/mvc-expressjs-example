const task = require('../models/pets.js');
const uuidvalidator = require('is-uuid');



exports.createPet = function(req,res){

    let validate = true;
    let message = ``;
    if(req.body.name == null || req.body.race == null || req.body.age == null || req.body.owner == null || req.body.type_pet == null ){
        validate = false;
        message = `No complete params found`  
        }
        if(validate){
            task.createPet(req,res);
        }else{
            res.status(400).send({
                message : message
            }) 
        }
}

exports.getAllPets = function(req,res){
    task.getPets(req,res);
}

exports.getAPet = function(req,res){
    task.getPet(req,res);
}

exports.updatePet = function(req,res){
    let message = ``;
    let validate = true;

    if(!uuidvalidator.v4(req.params.id) ){
        validate = false;
        message = `No id found`  
    }
    
    if(validate){
        task.putPet(req,res);
    }else{
        res.status(400).send({
            message : message
        })   
    }
   
}