import { doesNotMatch } from 'assert';
import dotenv from 'dotenv'; 
dotenv.config(); 
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

  describe("Exercise 3", () => {
    
    it("Tribe has repositories with coverage - 1st scenario", async () => {
      const result = await request.get("/api/v1/repositories/metrics/779134643751354370")
      expect(result.statusCode).toEqual(200)
    });

    it("Tribe not found - 2nd scenario", async () => {
      const result = await request.get("/api/v1/repositories/metrics/12")
      expect(result.statusCode).toEqual(224)
      expect(result.text).toContain('La Tribu no se encuentra registrada')      
    });

    it("Verification State - 3rd scenario", async () => {
      const result = await request.get("/api/v1/repositories/metrics/779134643751354370")
      expect(result.statusCode).toEqual(200)
      expect(result.text).toContain("Verificado" || "En espera" || "Aprobado")
    });

    it("Tribe does not have repositories with enough coverage - 4th scenario", async () => {
      const result = await request.get("/api/v1/repositories/metrics/779134794300915714")
      expect(result.statusCode).toEqual(224)
      expect(result.text).toContain('La Tribu no tiene repositorios que cumplan con la cobertura necesaria')
    });
  });