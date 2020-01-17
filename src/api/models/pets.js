var uuid = require('node-uuid');
const connection = require('./../../config/db.js');




exports.createPet = function (req, res, next) {

    connection.connect(function(err) {
        connection.query(`INSERT INTO pets (id, name, race , age, owner,type_pet) VALUES ('${uuid.v4()}', '${req.body.name}', '${req.body.race}', '${req.body.age}', '${req.body.owner}','${req.body.type_pet}')`, async (err, result, fields) => {
            if(err){
                res.send({status: false, message: err})
            } else{
                  res.send(true)
            }
        })
      });

}

exports.getPets = function(req, res, next) {
    connection.connect(function(err) {
        connection.query("SELECT * FROM pets", async (err, result, fields) => {
            res.send(result)
        });
      });
}

exports.getPet = function(req, res, next) {
    connection.connect((err)=>{
        connection.query(`SELECT * FROM pets WHERE name='${req.params.name}'`, async (error, result,next)=>{
            console.log(result)
            if(error) console.log(error)
            else res.send(result[0])
        })
    });
}

exports.putPet = function(req, res, next) {
    connection.connect((err)=>{
        connection.query(`UPDATE pets SET name='${req.body.name}',race='${req.body.race}',age='${req.body.age}',type_pet='${req.body.type_pet}' WHERE id='${req.params.id}'`, async (error, result,next)=>{
            console.log(result)
            if(err){
                res.send({status: false, message: err})
            } else{
                  res.send(true)
            }
        })
    });
}