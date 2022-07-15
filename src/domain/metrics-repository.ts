export class MetricsRepository {
    
    id: string
    name: string
    tribe: string
    organization: string
    coverage: string
    codeSmells: number
    bugs: number
    vulnerabilities: number
    hotspots: number
    verificationState: string
    state: string
    organizationStatus: number

    constructor(payload) {
        const { id, name, tribe, organization, coverage, codesmells, bugs, vulnerabilities, hotspots, organizationstatus, state } = payload;
    
        this.id = id
        this.name = name.trim()
        this.tribe = tribe.trim()
        this.organization= organization.trim()
        this.coverage = coverage + "%"
        this.codeSmells = codesmells
        this.bugs = bugs
        this.vulnerabilities = vulnerabilities
        this.hotspots = hotspots
        this.organizationStatus = organizationstatus
        this.state = state
    }
}
  