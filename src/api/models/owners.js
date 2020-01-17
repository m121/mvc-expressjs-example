var uuid = require('node-uuid');
const connection = require('./../../config/db.js');




exports.createOwner = function (req, res, next) {

    connection.connect(function(err) {
        connection.query(`INSERT INTO owners (id, name, address , phone, email) VALUES ('${uuid.v4()}', '${req.body.name}', '${req.body.address}', '${req.body.phone}', '${req.body.email}')`, async (err, result, fields) => {
            if(err){
                res.send({status: false, message: err})
            } else{
                  res.send(true)
            }
        })
      });

}

exports.getOwners = function(req, res, next) {
    connection.connect(function(err) {
        connection.query("SELECT * FROM owners", async (err, result, fields) => {
            res.send(result)
        });
      });
}

exports.getOwner = function(req, res, next) {
    connection.connect((err)=>{
        connection.query(`SELECT * FROM owners WHERE id='${req.params.id}'`, async (error, result,next)=>{
            console.log(result)
            if(error) console.log(error)
            else res.send(result[0])
        })
    });
}

exports.putOwner = function(req, res, next) {
    connection.connect((err)=>{
        connection.query(`UPDATE owners SET name='${req.body.name}',address='${req.body.address}',phone='${req.body.phone}',email='${req.body.email}' WHERE id='${req.params.id}'`, async (error, result,next)=>{
            console.log(result)
            if(err){
                res.send({status: false, message: err})
            } else{
                  res.send(true)
            }
        })
    });
}