import mongoose from 'mongoose'
import config from '../utils/endpoints.config.js'

mongoose.connect(config.MongoUri!)
  .then((_) => console.log('connected to MongoDB\n', config.MongoUri))
  .catch((err) => console.log(err))

const imgSchema = new mongoose.Schema({
  name: String,
  imgUrl: String
})

export const ImageModel = mongoose.model('Image', imgSchema)
