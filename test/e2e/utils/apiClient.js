import dotenv from "dotenv";

dotenv.config({ path: "./qa.env" });

const BASE_URL = process.env.BASE_URL || "https://petstore.swagger.io/v2";

const createPet = async (request, petData) => {
    
};

const getPetById = async (request, petId) => {
    
};

const updatePet = async (request, petData) => {
    
};

const deletePet = async (request, petId) => {
    
};

export { createPet, getPetById, updatePet, deletePet, BASE_URL };
