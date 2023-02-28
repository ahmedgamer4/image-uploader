import express from 'express'
import { ImageModel } from '../models/image.js'
import path from 'path'
import multer from 'multer'
import https from 'https'
import { cloudinary, storage } from '../utils/cloudnary.js'

export const imageRouter = express.Router()
const upload = multer({ storage })

const urlToBuffer = async (url: string): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const data: Uint8Array[] = []

    https.get(url, (res) => {
      res
        .on('data', (chunk: Uint8Array) => {
          data.push(chunk)
        })
        .on('end', () => {
          resolve(Buffer.concat(data))
        })
        .on('error', (err) => {
          reject(err)
        })
    })
  })
}

imageRouter.get('/:filename', async (req, res) => {
  try {
    const imageBuffer = await urlToBuffer(
      cloudinary.url(`images/${req.params.filename}.jpg`, {
        secure: true,
      })
    )
    res.writeHead(200, { 'Content-Type':'image/jpg' })
    res.write(imageBuffer)
    res.end()
  } catch (err) {
    res.status(500).send(err)
  }
})

imageRouter.post('/uploads', upload.single('image'), async (req, res) => {
  try {
    if (req.file) {
      console.log(JSON.stringify(req.file))
      const imgLink = path.join('api', 'images', req.params.filename)

      res.status(201).send(imgLink)
    } else {
      res.status(400)
    }
  } catch (err) {
    res.status(500).send(`POST ${err}`)
  }
})