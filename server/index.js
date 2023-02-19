const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// Endpoint pro získání dat z data.json
app.get('/data', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while reading the data.');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Endpoint pro ukládání dat z formuláře
app.post('/data', (req, res) => {
    const { name, lastName, email } = req.body;
    const data = { name, lastName, email };
    const filePath = path.join(__dirname, 'data.json');

    fs.readFile(filePath, 'utf-8', (err, fileData) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while reading the data.');
        } else {
            let json = [];
            if (fileData) {
                json = JSON.parse(fileData);
            }
            console.log(json)
            json.push(data);

            fs.writeFile(filePath, JSON.stringify(json, null, 2), (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('An error occurred while saving the data.');
                } else {
                    res.status(200).send('Data saved successfully.');
                }
            });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
