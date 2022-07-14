import { IOrganizationAdapter, IOrganizationUseCase } from '../interfaces/organization'
import { Organization } from 'src/domain/organization'

export default class implements IOrganizationUseCase {
    private adapter: IOrganizationAdapter

    constructor(adapter: IOrganizationAdapter) {
        if (!adapter) {
            throw new Error('Adapter is required.')
        }
        this.adapter = adapter
    }
  
    createOrganization(name: string, status: number): Promise<boolean> {
        return this.adapter.createOrganization(name, status)
    }

    getAllOrganizations(): Promise<Organization[]> {
        return this.adapter.getAllOrganizations()
    }

    updateOrganization(organization: Organization): Promise<boolean> {
        return this.adapter.updateOrganization(organization)
    }

    deleteOrganization(id: number): Promise<boolean> {
        return this.adapter.deleteOrganization(id)
    }
    
}