const router = require('express').Router();
const multer = require('multer');
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1048576, // 5MB
        files: 1
    }
});

const ListAbl = require('../abl/image/list-abl');
const GetAbl = require('../abl/image/get-abl');
const AddAbl = require('../abl/image/add-abl');
const UpdateAbl = require('../abl/image/update-abl');
const DeleteAbl = require('../abl/image/delete-abl');

router.get('/', ListAbl)
router.get('/:id', GetAbl);
router.post('/', upload.single('image'), AddAbl);
router.put('/:id', upload.single('image'), UpdateAbl);
router.delete('/:id', DeleteAbl);

module.exports = router;