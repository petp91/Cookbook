const router = require('express').Router();

const ListAbl = require('../abl/recipe/list-abl');
const GetAbl = require('../abl/recipe/get-abl');
const AddAbl = require('../abl/recipe/add-abl');
const UpdateAbl = require('../abl/recipe/update-abl')
const DeleteAbl = require('../abl/recipe/delete-abl')

router.get('/', ListAbl);
router.get('/:id', GetAbl);
router.post('/', AddAbl);
router.put('/:id', UpdateAbl);
router.delete('/:id', DeleteAbl);

module.exports = router;