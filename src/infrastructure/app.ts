import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import * as bodyParser from 'body-parser'

import RespotoriesRouter from './routes/repositories'

const app = express();
app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// ROUTER
new RespotoriesRouter(app)

export default app;