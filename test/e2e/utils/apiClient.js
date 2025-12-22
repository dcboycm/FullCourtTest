import dotenv from "dotenv";

dotenv.config({ path: "./qa.env" });

const BASE_URL = process.env.BASE_URL || "https://petstore.swagger.io/v2";

const createPet = async (request, petData) => {
    return await request.post(`${BASE_URL}/pet`, {
        data: petData
    });
};

const getPetById = async (request, petId) => {
    return await request.get(`${BASE_URL}/pet/${petId}`);
};

const updatePet = async (request, petData) => {
    return await request.put(`${BASE_URL}/pet`, {
        data: petData
    });
};

const deletePet = async (request, petId) => {
    return await request.delete(`${BASE_URL}/pet/${petId}`);
};

export { createPet, getPetById, updatePet, deletePet, BASE_URL };
