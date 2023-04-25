const router = require('express').Router();

const ListAbl = require('../abl/ingredient/list-abl');
const GetAbl = require('../abl/ingredient/get-abl');
const AddAbl = require('../abl/ingredient/add-abl');
const UpdateAbl = require('../abl/ingredient/update-abl')
const DeleteAbl = require('../abl/ingredient/delete-abl')

router.get('/', ListAbl);
router.get('/:id', GetAbl);
router.post('/', AddAbl);
router.put('/:id', UpdateAbl);
router.delete('/:id', DeleteAbl);

module.exports = router;