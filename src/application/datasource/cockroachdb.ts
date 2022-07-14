import CockroachbdAdapter from "../../infrastructure/adapters/cockroachbd-adapter";
import Organization from "../use-cases/organization";

const adapters = {
    organization: new CockroachbdAdapter()
}

const useCases = {
    organization: new Organization(adapters.organization)
}

export default useCases