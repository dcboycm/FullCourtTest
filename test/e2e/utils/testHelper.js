import PetClient from "./apiClient.js";
import { expect } from "chai";

export async function createPet(name, status) {
    const response = await PetClient.postCreatePet({
        name: name,
        status: status
    })
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property('id');

    return response.data;
}