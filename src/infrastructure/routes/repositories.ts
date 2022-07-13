import express from 'express'

export default class {
  constructor(server: express.Express) {
    const router = express.Router()

    router.get('/', (req: express.Request, res: express.Response) => {
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

    server.use('/api/v1/repositories', router)
  }
}
