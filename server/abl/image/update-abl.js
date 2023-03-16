const imageDao = require('../../dao/file_storage/image-dao');
const { checkFile } = require('./common');

async function UpdateAbl(req, res) {
    try {
        let id = req.params.id;
        if (!checkFile) return;

        let { buffer, mimetype } = req.file;
        let imageObj = await imageDao.updateImage({ _id: id, data: buffer, contentType: mimetype});
        if (!imageObj) {
            res.status(404).send(`An image with the given id (${id}) was not found.`);
            return;
        }
        res.send({ _id: imageObj._id });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}

module.exports = UpdateAbl;