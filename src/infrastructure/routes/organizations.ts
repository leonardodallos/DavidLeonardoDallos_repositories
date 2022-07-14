import { errorHandler } from '../../infrastructure/middleware/errorHandler'
import { Express, Router, Request, Response, NextFunction } from 'express'
import { IOrganizationUseCase } from 'src/application/interfaces/organization'

export default class {
    
    constructor(server: Express, useCase: IOrganizationUseCase) {
        const router = Router()

        router.post('/', async (req: Request, res: Response, next: NextFunction) => {
            try {
                await useCase.createOrganization(req.body.name, req.body.status)
                return res.status(200).send("Organization created!")
            } catch (err) {
                return next(err)
            }
        })

        router.get('/', async (req: Request, res: Response, next: NextFunction) => {
            try {
                const organizations = await useCase.getAllOrganizations()
                return res.status(200).json(organizations)
            } catch (err) {
                return next(err)
            }
        })
        
        router.delete('/', async (req: Request, res: Response, next: NextFunction) => {
            try {
                console.log(req.body.id)
                await useCase.deleteOrganization(req.body.id)
                return res.status(200).send("Organization deleted!")
            } catch (err) {
                return next(err)
            }
        })

        router.put('/', async (req: Request, res: Response) => {
            res.status(200).send("Organization updated!")
        })

        router.use(errorHandler)

        server.use('/api/v1/organizations', router)
    }
}
