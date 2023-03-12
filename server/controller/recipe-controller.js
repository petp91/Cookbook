const router = require('express').Router();

const ListAbl = require('../abl/recipe/list-abl');
const GetAbl = require('../abl/recipe/get-abl');
const AddAbl = require('../abl/recipe/add-abl');

router.get('/', ListAbl);
router.get('/:id', GetAbl);
router.post('/', AddAbl);

module.exports = router;