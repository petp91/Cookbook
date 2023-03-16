const imageDao = require('../../dao/file_storage/image-dao');

async function ListAbl(req, res) {
    try {
        let images = await imageDao.getAllImageIds();
        res.send(images);
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}

module.exports = ListAbl;