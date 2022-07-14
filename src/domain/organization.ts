export class Organization {
    
    id: string
    name: string
    status: number

    constructor(payload) {
        const { id_organization, name, status } = payload;
    
        this.id = id_organization
        this.name = name
        this.status = status
    }
}
  