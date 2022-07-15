import { IRepositoryAdapter, IRepositoryUseCase } from '../interfaces/repository'
import { MetricsRepository } from 'src/domain/metrics-repository'
import fetch from 'node-fetch'
import * as csvWriter from 'csv-writer'
import path from 'path'

export default class implements IRepositoryUseCase {
    private adapter: IRepositoryAdapter

    constructor(adapter: IRepositoryAdapter) {
        if (!adapter) {
            throw new Error('Adapter is required.')
        }
        this.adapter = adapter
    }

    async getMetricsRepository(id_tribe: string): Promise<MetricsRepository[]> {
        const metricsRepositories = await this.adapter.getMetricsRepository(id_tribe)
        const verificationStates = await this.getVerificationStates([...new Set(metricsRepositories.map(metric => metric.organizationStatus))])
        return metricsRepositories.map(metric => {
            metric.verificationState = verificationStates.find(verificationState => { return verificationState.id == metric.organizationStatus}).state
            delete metric['organizationStatus']
            return metric;
        })
        
    }

    async getVerificationStates(states: number[]) {
        const api_url = 'http://localhost:'+process.env.APP_PORT+'/api/v1/verificationState'
        const requests = states.map(async state => {
            return (await fetch(`${api_url}/${state}`)).json()
        })
        const verificationStates = await Promise.all(requests).then( _results => {
            return _results
        })
        return verificationStates
    }

    async generateCSVMetrics(id_tribe: string) {
        const writer = csvWriter.createObjectCsvWriter({
            path: path.resolve(__dirname, 'metrics.csv'),
            header: [
              { id: 'id', title: 'ID' },
              { id: 'name', title: 'Name' },
              { id: 'tribe', title: 'Tribe' },
              { id: 'organization', title: 'Organization' },
              { id: 'coverage', title: 'Coverage' },
              { id: 'codeSmells', title: 'Code Smells' },
              { id: 'bugs', title: 'Bugs' },
              { id: 'vulnerabilities', title: 'Vulnerabilities' },
              { id: 'hotspots', title: 'Hotspots' },
              { id: 'state', title: 'State' },
              { id: 'verificationState', title: 'Verification State' }
            ],
          });
        const metrics = await this.getMetricsRepository(id_tribe)
          writer.writeRecords(metrics).then(() => {
            console.log('CSV generated!');
          });
    }
}