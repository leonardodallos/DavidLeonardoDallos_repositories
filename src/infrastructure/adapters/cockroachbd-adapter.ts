import { NotFoundError } from "../../infrastructure/commons/errors/not-found-error";
import { IOrganizationAdapter } from "../../application/interfaces/organization";
import { Organization } from "../../domain/organization";
import  pool  from "../../infrastructure/database/cockroach"

export default class implements IOrganizationAdapter {

    async createOrganization(name: string, status: number): Promise<boolean> {
        const query = {
            text: 'INSERT INTO organization (name, status) VALUES ($1, $2) RETURNING id_organization',
            values: [name, status],
          };
      
        const result = await  pool.query(query);
    
        if (!result.rows[0].id_organization) {
            throw new Error('Organization could not be created');
        }
        return true
    }

    async getAllOrganizations(): Promise<Organization[]> {
        const query = {
            text: 'SELECT id_organization, name, status FROM organization',
            values: [],
          };
      
        const result = await  pool.query(query);
    
        if (!result.rowCount) {
            throw new NotFoundError('Organizations not found');
        }
        return result.rows.map(org => new Organization(org))
    }

    updateOrganization(organization: Organization): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    deleteOrganization(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}