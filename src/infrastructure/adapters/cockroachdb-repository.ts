import { NotFoundError } from "../commons/errors/not-found-error";
import { IRepositoryAdapter } from "../../application/interfaces/repository";
import { MetricsRepository } from "../../domain/metrics-repository";
import  pool  from "../database/cockroach"

export default class implements IRepositoryAdapter {

    async getMetricsRepository(id_tribe: string): Promise<MetricsRepository[]> {

        let query = {
            text: 'SELECT id_tribe FROM tribe WHERE id_tribe = $1',
            values: [id_tribe],
          }
          
        const result_tribe = await pool.query(query)
    
        if (!result_tribe.rowCount) {
            throw new NotFoundError('La Tribu no se encuentra registrada')
        }

        query = {
            text: ` SELECT R.id_repository AS id, R.name, T.name AS tribe, O.name AS organization, 
                           M.coverage, M.code_smells AS codesmells, M.bugs, M.vulnerabilities, 
                           M.hotspot AS hotspots, O.status AS organizationstatus, 'Habilitado' AS state 
                    FROM repository R
                         INNER JOIN tribe T ON R.id_tribe = T.id_tribe
                         INNER JOIN organization O ON T.id_organization = O.id_organization
                         INNER JOIN metrics M ON R.id_repository = M.id_repository
                    WHERE R.id_tribe = $1
                          AND R.state = 'E'
                          AND M.coverage > 75
                          AND date_part('year', R.create_time) = date_part('year', CURRENT_DATE) ` ,
            values: [id_tribe],
          }

        const result = await pool.query(query)

        if (!result.rowCount) {
            throw new NotFoundError('La Tribu no tiene repositorios que cumplan con la cobertura necesaria')
        }
        
        return result.rows.map(repository => new MetricsRepository(repository))
    }
    
}