import express from 'express'

export function test(app: express.Application) {
  app.use('/route', (req, res, next) => {
    res.json('ok')
  })
}
