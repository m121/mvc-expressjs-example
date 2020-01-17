var owner = require('../controllers/owners.js');
var  router = require('express').Router();


    router.post('/', owner.createOwner);
    router.get('/', owner.getAllOwners);
    router.get('/:id', owner.getAOwner);
    router.put('/:id', owner.updateOwner);


    module.exports = router;