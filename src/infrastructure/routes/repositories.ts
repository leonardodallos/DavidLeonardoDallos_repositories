import {Express, Router, Request, Response, NextFunction} from 'express'
import { errorHandler } from '../../infrastructure/middleware/errorHandler'
import { IRepositoryUseCase } from 'src/application/interfaces/repository'

export default class {
  constructor(server: Express, useCase: IRepositoryUseCase) {
    const router = Router()

    router.get('/', (req: Request, res: Response) => {
      const statusRepositories = [
        {
            "id": 1,
            "state": 604
        },
        {
            "id": 2,
            "state": 605
        },
        {
            "id": 3,
            "state": 606
        }
      ];
      res.status(200).json({ repositories: statusRepositories})
    })

    router.get('/metrics/:id', async(req: Request, res: Response, next: NextFunction)=>{
      try {
        const repositories = await useCase.getMetricsRepository(req.params.id)
        return res.status(200).json(repositories)
      } catch (err) {
          return next(err)
      }
    })

    router.get('/csvMetrics/:id', async(req: Request, res: Response, next: NextFunction)=>{
      try {
        await useCase.generateCSVMetrics(req.params.id)
        return res.status(200).send('CSV file generated')
      } catch (err) {
          return next(err)
      }
    })

    router.use(errorHandler)

    server.use('/api/v1/repositories', router)
  }
}
