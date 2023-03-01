import dotenv from 'dotenv';
dotenv.config();
import config from './utils/endpoints.config.js';
import express from 'express';
import cors from 'cors';
import { imageModel } from './models/image.js';
import fs from 'fs';
import path from 'path';
import { upload } from './utils/middleware.js';
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.get('/', (req, res) => {
    imageModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send(`An error occured ${err}`);
        }
        else {
            res.send({ items });
        }
    });
});
app.post('/uploads', upload.single('image'), (req, res) => {
    const { body } = req.body;
    const imgToUpload = {
        name: body.name,
        img: {
            data: fs.readFileSync(path.join(__dirname, '/uploads/', req.file.filename)),
            contentType: '/image/*'
        }
    };
    imageModel.create(imgToUpload, (err, _) => {
        if (err)
            console.log(err);
        else
            res.redirect('/');
    });
});
const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' });
};
app.use(unknownEndpoint);
app.listen(port, () => {
    console.log(`server is listening on port ${port}\n URI is ${config.MongoUri}`);
});
//# sourceMappingURL=index.js.map