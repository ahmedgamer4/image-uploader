import express from 'express';
import https from 'https';
import { cloudinary, upload } from '../utils/cloudnary.js';
export const imageRouter = express.Router();
const urlToBuffer = async (url) => {
    return new Promise((resolve, reject) => {
        const data = [];
        https.get(url, (response) => {
            response
                .on('data', (chunk) => {
                data.push(chunk);
            })
                .on('end', () => {
                resolve(Buffer.concat(data));
            })
                .on('error', (error) => {
                reject(error);
            });
        });
    });
};
imageRouter.get('/uploads/:filename', async (req, res) => {
    try {
        const imageBuffer = await urlToBuffer(cloudinary.url(`images/${req.params.filename}.jpg`, {
            secure: true,
        }));
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        res.write(imageBuffer);
        res.end();
    }
    catch (err) {
        res.status(500).send(err);
    }
});
imageRouter.post('/uploads', upload.single('image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        res.status(201).send({
            imgUrl: result.secure_url,
            publicId: result.public_id,
        });
    }
    catch (err) {
        res.status(500).send(`POST ${err}`);
    }
});
//# sourceMappingURL=image.js.map