import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "./qa.env" });

const BASE_URL = process.env.BASE_URL || "https://petstore.swagger.io";
const API_VERSION = process.env.API_VERSION || "v2";

const apiClient = axios.create({
    baseURL: `${BASE_URL}/${API_VERSION}`,
    headers: {
        "Content-Type": "application/json"
    }
});

// TODO: Implement the following functions in this file:
// - createPet(petData)
// - getPetById(petId)
// - updatePet(petData)
// - deletePet(petId)

export default class PetClient {
    static apiClient = apiClient

   static async createPet(petData) {
    return this.apiClient.post('pet', petData)
   }
}

