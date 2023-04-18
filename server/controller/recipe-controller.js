const router = require('express').Router();

const ListAbl = require('../abl/recipe/list-abl');
const GetAbl = require('../abl/recipe/get-abl');
const AddAbl = require('../abl/recipe/add-abl');
const DeleteAbl = require('../abl/recipe/delete-abl')
const PutAbl = require('../abl/recipe/put-abl')

router.get('/', ListAbl);
router.get('/:id', GetAbl);
router.post('/', AddAbl);
router.delete('/:id', DeleteAbl);
router.put('/:id', PutAbl);

module.exports = router;