
import app from '../src/infrastructure/app'; 
const supertest = require('supertest')
const request = supertest(app)

describe("GET / - Repositories simulated endpoint", () => {
    it("Test mock endpoint", async () => {
      const result = await request.get("/api/v1/repositories");
      const expectedResponseEndpoint1 = {
        repositories: [
          {
            "id": 1,
            "state": 604
          },
          {
            "id": 2,
            "state": 605
          },
          {
            "id": 3,
            "state": 606
          }
        ]
      };
      expect(result.text).toEqual(JSON.stringify(expectedResponseEndpoint1));
      expect(result.statusCode).toEqual(200);
    });
  });