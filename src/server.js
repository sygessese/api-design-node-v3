import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import router from './resources/item/item.router'
import { connect } from './utils/db'
import config from './config'

const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/item', router)

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`app running on ${config.port}`)
    })
  } catch (e) {
    console.error(e)
  }
}
