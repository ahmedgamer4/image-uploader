import express from 'express'

export const errorHandler = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err.name === 'CastError') {
    return res.status(400).send({ err: 'Malformatted error' })
  }
  if (err.name === 'ValidationError') {
    return res.status(400).send({ err: err.message })
  }

  console.log(err.message)
  next(err)
}

export const unknownEndpoint = (req: express.Request, res: express.Response) => {
  res.status(404).send({ error: 'unknown endpoint' }) 
}
