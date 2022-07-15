import {Express, Router, Request, Response} from 'express'

export default class {
  constructor(server: Express) {
    const router = Router()

    router.get('/:id', (req: Request, res: Response) => {
      const verificationStates = [
        {
            "id": 604,
            "state": "Verificado"
        },
        {
            "id": 605,
            "state": "En Espera"
        },
        {
            "id": 606,
            "state": "Aprobado"
        }
      ];
      const state = Number(req.params.id);
      var verificationState = verificationStates.find(verificationState => verificationState.id === state)
      if (verificationState)
        res.status(200).json(verificationState)
      else
        res.status(404)
    })

    server.use('/api/v1/verificationState', router)
  }
}
