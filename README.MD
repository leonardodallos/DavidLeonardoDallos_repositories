# Repositories

David Leonardo Dallos Parra.

This is a REST api for Organization management and Repository queries. I used http methods to describe each action to be performed.

> GET, DELETE, POST (to create), PUT (to update)

## Technology Stack

- NodeJs
- Express
- CockroachDB
- Postman
- Jest and Supertest

## Endpoints

I created an endpoint for each exercise, so you will find 4 endpoints for Organization management (create, list, update and delete) and other two for exercise 3 and 4 related to repository metrics. 

The base route is `/api/v1/`, then according to the feature, we can found `repositories` and `organizations`

- `GET /api/v1/organizations` - Retrieves list of all organizations
- `POST /api/v1/organizations` - Creates an organization
- `PUT /api/v1/organizations` - Update an organization
- `DELETE /api/v1/organizations` - Delete an organization
- `GET /api/v1/repositories` - Retrieves list of states of repositories
- `GET /api/v1/repositories/metrics/:idTribe` - Get repositories with metrics according to acceptance criteria
- `GET /api/v1//repositories/csvMetrics/:idTribe` - Generate CSV file with repository metrics


## How to Run

To install dependencies
>`npm install`

To build the project:
>`npm run build`

To execute project (dev with nodemon)
>`npm run dev`

### Try endpoints

I created a workspace in Postman to test endpoints, [here](https://www.postman.com/spacecraft-participant-96883506/workspace/repositories/overview) you can access to requests for each endpoint.

## Database creation

Script to create database dbinit.sql

>command: `cat dbinit.sql | cockroach sql --url {connection-string}`

## Considerations 

- .env file with secrets used in the app was uploaded to Git repo, just to show how it can be used

- Validation data types were left on database with CHECK constraints.