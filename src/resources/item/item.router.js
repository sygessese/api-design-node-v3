import { Router } from 'express'
import controller from './item.controllers'

const router = Router()

router
  .route('/')
  .get((req, res) => {
    res.send(controller.getAll())
  })
  .post((req, res) => {
    res.send(controller.createOne())
  })

router
  .route('/:id')
  .get((req, res) => {
    res.send(controller.getOne(req.params.id))
  })
  .put((req, res) => {
    res.send(controller.updateOne())
  })
  .delete((req, res) => {
    res.send(controller.deleteOne())
  })

export default router
