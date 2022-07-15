import { MetricsRepository } from 'src/domain/metrics-repository'

interface IRepositoryAdapter {
    getMetricsRepository(id_tribe: string): Promise<MetricsRepository[]>
}

interface IRepositoryUseCase {
    getMetricsRepository(id_tribe: string): Promise<MetricsRepository[]>
    generateCSVMetrics(id_tribe: string)
}

export { IRepositoryAdapter, IRepositoryUseCase }