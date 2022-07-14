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

    async updateOrganization(id: number, name: string, status: number): Promise<boolean> {
        const query = {
            text: 'UPDATE organization SET name = $2, status = $3 WHERE id_organization = $1',
            values: [id, name, status],
          };
          
        const result = await pool.query(query);

        if (!result.rowCount) {
            throw new NotFoundError('Organization not found');
        }
        
        return true
    }

    async deleteOrganization(id: number): Promise<boolean> {
        const query = {
            text: 'DELETE FROM organization WHERE id_organization = $1',
            values: [id],
          };
          
        const result = await pool.query(query);

        if (!result.rowCount) {
            throw new NotFoundError('Organization not found');
        }

        return true
    }
}