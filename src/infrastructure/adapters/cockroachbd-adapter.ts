import { IOrganizationAdapter } from "../../application/interfaces/organization";
import { Organization } from "../../domain/organization";
import  pool  from "../../infrastructure/database/cockroach"

export default class implements IOrganizationAdapter {

    createOrganization(organization: Organization): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async getAllOrganizations(): Promise<Organization[]> {
        const query = {
            text: 'SELECT id_organization, name, status FROM organization',
            values: [],
          };
      
        const result = await  pool.query(query);
    
        console.log(result.rows)
        if (!result.rowCount) {
            throw new Error('No organizations found');
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