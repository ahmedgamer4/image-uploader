import express from 'express'
import { cloudinary, upload } from '../utils/cloudnary.js'

export const imageRouter = express.Router()

imageRouter.post('/uploads', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file!.path)

    res.status(201).send({
      imgUrl: result.secure_url,
      publicId: result.public_id,
    })
  } catch (err) {
    res.status(500).send(`POST ${err}`)
  }
})