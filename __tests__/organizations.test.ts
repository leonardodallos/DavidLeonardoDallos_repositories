
import app from '../src/infrastructure/app'; 
import dotenv from 'dotenv'; 
dotenv.config(); 
const supertest = require('supertest')
const request = supertest(app)

describe("Organization endpoints", () => {
    it("Create organization - no parameters", async () => {
      const result = await request.post("/api/v1/organizations")
      expect(result.statusCode).toEqual(500)
    })

    it("get organizations", async () => {
      const result = await request.get("/api/v1/organizations")
      expect(result.statusCode).toEqual(500)
    })
  })