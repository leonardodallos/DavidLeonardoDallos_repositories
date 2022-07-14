import { errorHandler } from '../../infrastructure/middleware/errorHandler'
import express from 'express'
import { IOrganizationUseCase } from 'src/application/interfaces/organization'

export default class {
    
    constructor(server: express.Express, useCase: IOrganizationUseCase) {
        const router = express.Router()

        router.post('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            try {
                await useCase.createOrganization(req.body.name, req.body.status)
                return res.status(200).send("Organization created!")
            } catch (err) {
                return next(err)
            }
        })

        router.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            try {
                const organizations = await useCase.getAllOrganizations()
                return res.status(200).json(organizations)
            } catch (err) {
                return next(err)
            }
        })
        
        router.delete('/', async (req: express.Request, res: express.Response) => {
            res.status(200).send("Organization deleted!")
        })

        router.put('/', async (req: express.Request, res: express.Response) => {
            res.status(200).send("Organization updated!")
        })

        router.use(errorHandler)

        server.use('/api/v1/organizations', router)
    }
}
