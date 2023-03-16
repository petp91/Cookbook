const imageDao = require('../../dao/file_storage/image-dao');

async function GetAbl(req, res) {
    try {
        let id = req.params.id;
        let image = await imageDao.getImage(id);
        if (!image) {
            res.status(404).send(`An image with the given id (${id}) was not found.`);
            return;
        }
        res.type(image.contentType).send(image.data);
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}

module.exports = GetAbl;