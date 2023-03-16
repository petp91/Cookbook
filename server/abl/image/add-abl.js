const imageDao = require('../../dao/file_storage/image-dao');
const { checkFile } = require('./common');

async function AddAbl(req, res) {
    try {
        if (!checkFile(req.file, res)) return;

        let { buffer, mimetype } = req.file;
        let imageObj = await imageDao.addImage({ data: buffer, contentType: mimetype});
        res.send({ _id: imageObj._id });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}

module.exports = AddAbl;