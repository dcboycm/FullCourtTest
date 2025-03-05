import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "./qa.env" });

const BASE_URL = process.env.BASE_URL || "https://petstore.swagger.io/v2";

const apiClient = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
        "Content-Type": "application/json"
    }
});

const createPet = async (petData) => {

};

const getPetById = async (petId) => {

};

const updatePet = async (petData) => {

};

const deletePet = async (petId) => {

};

export { createPet, getPetById, updatePet, deletePet };
export default apiClient;
