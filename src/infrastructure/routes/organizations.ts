import express from 'express'
import { IOrganizationUseCase } from 'src/application/interfaces/organization'

export default class {
    
    constructor(server: express.Express, useCase: IOrganizationUseCase) {
        const router = express.Router()

        router.post('/', async (req: express.Request, res: express.Response) => {
        //TODO: endpoint implementation
        res.status(200).send("Organization created!")
        })

        router.get('/', async (req: express.Request, res: express.Response) => {
            try {
                const organizations = await useCase.getAllOrganizations()
                return res.status(200).json(organizations)
            } catch (err) {
                return res.send(err)
            }
        })
        
        router.delete('/', async (req: express.Request, res: express.Response) => {
            res.status(200).send("Organization deleted!")
        })

        router.put('/', async (req: express.Request, res: express.Response) => {
            res.status(200).send("Organization updated!")
        })

        server.use('/api/v1/organizations', router)
    }
}
