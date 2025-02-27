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

export default class PetClient {
    static apiClient = apiClient

   static async postCreatePet(petData) {
    try {
        const response = await this.apiClient.post('pet', petData)
        return response
    } catch (error) {
        throw new Error(`Error creating pet: ${error.message}`)
    }
   }

   static async getPetById(petId) {
    try {
        const response = await this.apiClient.get(`pet/${petId}`)
        return response
    } catch (error) {
        throw new Error(`Error retrieving pet: ${error.message}`)
    }
   }

   static async postUpdatePet(petId,petData) {
    try {
        // 415 for form data payload
        const formData = new FormData()
        for (const [key, value] of Object.entries(petData)) {
            formData.append(key, encodeURIComponent(value))
        }
        const response = await this.apiClient.post(`pet/${petId}`, formData)
        return response
    } catch (error) {
        throw new Error(`Error updating pet: ${error.message}`)
    }
   }

   static async deletePet(petId) {
    try {
        const response = await this.apiClient.delete(`pet/${petId}`)
        return response
    } catch (error) {
        throw new Error(`Error deleting pet: ${error.message}`)
    }
   }
}
