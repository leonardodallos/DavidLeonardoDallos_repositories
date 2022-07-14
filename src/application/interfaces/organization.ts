import { Organization } from 'src/domain/organization'

interface IOrganizationAdapter {
    createOrganization(name: string, status: number): Promise<boolean>
    getAllOrganizations(): Promise<Organization[]>
    updateOrganization(id: number, name: string, status: number): Promise<boolean>
    deleteOrganization(id: number): Promise<boolean>
}

interface IOrganizationUseCase {
    createOrganization(name: string, status: number): Promise<boolean>
    getAllOrganizations(): Promise<Organization[]>
    updateOrganization(id: number, name: string, status: number): Promise<boolean>
    deleteOrganization(id: number): Promise<boolean>
}

export { IOrganizationAdapter, IOrganizationUseCase }