import { Organization } from 'src/domain/organization'

interface IOrganizationAdapter {
    createOrganization(organization: Organization): Promise<boolean>
    getAllOrganizations(): Promise<Organization[]>
    updateOrganization(organization: Organization): Promise<boolean>
    deleteOrganization(id: number): Promise<boolean>
}

interface IOrganizationUseCase {
    createOrganization(organization: Organization): Promise<boolean>
    getAllOrganizations(): Promise<Organization[]>
    updateOrganization(organization: Organization): Promise<boolean>
    deleteOrganization(id: number): Promise<boolean>
}

export { IOrganizationAdapter, IOrganizationUseCase }