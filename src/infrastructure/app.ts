import express from 'express'
import repositories from './routes/repositories';
import RespotoriesRouter from './routes/repositories'

const app = express();

new RespotoriesRouter(app)

export default app;