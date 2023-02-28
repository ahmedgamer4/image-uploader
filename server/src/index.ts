import express from 'express'
import cors from 'cors'
import { errorHandler, unknownEndpoint } from './utils/middleware.js'
import { imageRouter } from './controllers/image.js'

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use('/api/images', imageRouter)


app.use(errorHandler)
app.use(unknownEndpoint)

app.listen(port, () => {
  console.log(`server is listening on port ${port}\n`)
})