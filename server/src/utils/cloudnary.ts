import { v2 as cloudinaryV2 } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import config from './endpoints.config.js'

// Configuration 
cloudinaryV2.config({
  cloud_name: config.cloudName,
  api_key: config.apiKey,
  api_secret: config.apiSecret, 
})

export const cloudinary = cloudinaryV2

export const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req: Request, file: File) => {
    return {
      folder: 'images',
      allowedFormats: ['png', 'jpeg', 'jpg'],
    }
  }
})