import { v2 as cloudinaryV2 } from 'cloudinary'
import multer from 'multer'
import config from './endpoints.config.js'
import path from 'path'

cloudinaryV2.config({
  cloud_name: config.cloudName,
  api_key: config.apiKey,
  api_secret: config.apiSecret, 
})

export const cloudinary = cloudinaryV2

export const upload =  multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      cb(null, false)
      return
    }
    cb(null, true)
  },
})