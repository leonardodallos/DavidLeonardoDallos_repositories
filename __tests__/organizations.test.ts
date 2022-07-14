
import app from '../src/infrastructure/app'; 
const supertest = require('supertest')
const request = supertest(app)

describe("Organization endpoints", () => {
    it("Create organization", async () => {
      const result = await request.post("/api/v1/organizations");
      expect(result.statusCode).toEqual(200);
    });
  });