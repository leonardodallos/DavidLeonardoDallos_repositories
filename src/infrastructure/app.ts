import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import * as bodyParser from 'body-parser'

import RepotoriesRouter from './routes/repositories'
import OrganizationsRouter from './routes/organizations'
import VerificationStateRouter from './routes/verificationState'
import DataSource from '../application/datasource/cockroachdb'

const app = express();
app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// ROUTER
new RepotoriesRouter(app, DataSource.repository)
new OrganizationsRouter(app, DataSource.organization)
new VerificationStateRouter(app)

export default app;