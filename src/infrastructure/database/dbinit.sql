CREATE TABLE organization (
    id_organization serial PRIMARY KEY,
    name char(50) NOT NULL,
    status int NOT NULL
);

CREATE TABLE tribe (
    id_tribe serial PRIMARY KEY,
    name char(50) NOT NULL,
    status int NOT NULL,
    id_organization int NOT NULL,
    FOREIGN KEY(id_organization) REFERENCES organization (id_organization)
);

CREATE TABLE repository (
    id_repository serial PRIMARY KEY,
    name char(50) NOT NULL,
    state char(1) NOT NULL CHECK (state IN ('E', 'D', 'A')),
    create_time timestamp NOT NULL,
    status char(1) NOT NULL CHECK (status IN ('I', 'A')),
    id_tribe int NOT NULL,
     FOREIGN KEY(id_tribe) REFERENCES tribe (id_tribe)
);

CREATE TABLE metrics (
    id_repository INT,
    FOREIGN KEY(id_repository) REFERENCES repository (id_repository),
    coverage numeric NOT NULL CHECK (coverage >= 0 AND coverage <= 100),
    bugs int NOT NULL,
    vulnerabilities INT NOT NULL,
    hotspot INT NOT NULL,
    code_smells int NOT NULL,
    PRIMARY KEY(id_repository)
);