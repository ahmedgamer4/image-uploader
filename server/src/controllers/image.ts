import express from 'express'
import https from 'https'
import { cloudinary, upload } from '../utils/cloudnary.js'

export const imageRouter = express.Router()

const urlToBuffer = async (url: string): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const data: Uint8Array[] = []

    https.get(url, (response) => {
      response
        .on('data', (chunk: Uint8Array) => {
          data.push(chunk)
        })
        .on('end', () => {
          resolve(Buffer.concat(data))
        })
        .on('error', (error) => {
          reject(error)
        })
    })
  })
}

imageRouter.get(
  '/uploads/:filename',
  async (req: express.Request, res: express.Response) => {
    try {
      const imageBuffer: Buffer = await urlToBuffer(
        cloudinary.url(`images/${req.params.filename}.jpg`, {
          secure: true,
        })
      )
      res.writeHead(200, { 'Content-Type': 'image/jpg' })
      res.write(imageBuffer)
      res.end()
    } catch (err) {
      res.status(500).send(err)
    }
  }
)

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