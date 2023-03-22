const allowedMimetypes = ['image/jpeg', 'image/png'];

module.exports = {
    checkFile: (file, res) => {
        if (!file) {
            res.status(400).send('No file was received.');
            return false;
        }
        let { mimetype } = file;
        if (!allowedMimetypes.includes(mimetype)) {
            res.status(415).send(`${mimetype} is not allowed Media Type. Only ${allowedMimetypes.join(', ')} are allowed.`);
            return false;
        }
        return true;
    }
}