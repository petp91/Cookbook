const imageDao = require('../../dao/file_storage/image-dao');

async function DeleteAbl(req, res) {
    try {
        let id = req.params.id;
        let result = await imageDao.deleteImage(id);
        if (result) {
            res.status(200).send('The image was deleted.');
        } else {
            res.status(404).send(`An image with the given id (${id}) was not found.`);
        }
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}

module.exports = DeleteAbl;