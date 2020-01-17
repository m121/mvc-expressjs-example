var pet = require('../controllers/pets.js');
var  router = require('express').Router();


    router.post('/', pet.createPet);
    router.get('/', pet.getAllPets);
    router.get('/:name', pet.getAPet);
    router.put('/:id', pet.updatePet);


    module.exports = router;
