const path = require('path');
const crypto = require('crypto');
const { readFile, writeFile } = require('fs/promises');

const STORAGE_DIR_PATH = process.env.STORAGE_PATH || path.join(__dirname, '../../storage');
const JSON_FILE_PATH = path.resolve(STORAGE_DIR_PATH, 'images.json');


async function getAllImageIds() {
    let images = await _read();
    return images.map(image => { return { _id: image._id }; });
}

async function getImage(id) {
    let images = await _read();
    let image = images.find(image => image._id === id);
    if (!image) return undefined;
    let { _id, base64, contentType } = image;
    return { _id, data: Buffer.from(base64, 'base64'), contentType };
}

async function addImage(image) {
    let { data, contentType } = image;
    let _id = crypto.randomBytes(8).toString('hex');
    let images = await _read();
    images.push({
        _id,
        base64: data.toString('base64'),
        contentType
    });
    await _write(images);
    return { _id, data, contentType };
}

async function updateImage(image) {
    let { _id, data, contentType } = image;
    let images = await _read();
    let imageObj = images.find(img => img._id === _id);
    if (!imageObj) return undefined;
    imageObj.base64 = data.toString('base64');
    imageObj.contentType = contentType;
    await _write(images);
    return { _id, data, contentType };
}

async function deleteImage(id) {
    let images = await _read();
    let newImages = images.filter(image => image._id !== id);
    await _write(newImages);
    return images.length > newImages.length; // return if the _id was found and deleted
}

async function _read() {
    try {
        let file_contents = await readFile(JSON_FILE_PATH, { encoding: 'utf8' });
        return JSON.parse(file_contents);
    } catch (e) {
        if (e.code === 'ENOENT') {
            // if the file doesn't exist, return an empty array
            return [];
        }
        throw e;
    }
}

async function _write(data) {
    let json = JSON.stringify(data, null, 2);
    await writeFile(JSON_FILE_PATH, json);
}


module.exports = {
    getAllImageIds,
    getImage,
    addImage,
    updateImage,
    deleteImage
}