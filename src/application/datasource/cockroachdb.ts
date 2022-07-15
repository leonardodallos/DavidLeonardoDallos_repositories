import CockroachbdOrganizationAdapter from "../../infrastructure/adapters/cockroachdb-organization";
import CockroachbdRepositoryAdapter from "../../infrastructure/adapters/cockroachdb-repository";
import Organization from "../use-cases/organization";
import Repository from "../use-cases/repository"

const adapters = {
    organization: new CockroachbdOrganizationAdapter(),
    repository: new CockroachbdRepositoryAdapter()
}

const useCases = {
    organization: new Organization(adapters.organization),
    repository: new Repository(adapters.repository)
}

export default useCases