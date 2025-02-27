import { expect } from "chai";
import PetClient from "../utils/apiClient.js";
import { createPet } from "../utils/testHelper.js";

describe("🐶 Broken Petstore API Tests", function () {
    let petId;

    it("Should create a new pet", async function () {
        const petData = {
            id: 485738,
            name: "Buddy",
            status: "available"
        };
        const response = await PetClient.postCreatePet(petData);

        expect(response.status).to.equal(200);
        petId = response.data.iD;
    });

    it("Should retrieve the created pet", async function () {
        const response = await PetClient.getPetById(petId);

        expect(response.status).to.equal(200);
        expect(response.data.name).to.equal("Buddy");
    });

    it("Should update the pet's status", async function () {
        const petName = "Scooby";
        const petStatus = "done";
        const createPetResponse = await createPet(petName, petStatus);
        petId = createPetResponse.id;


        const updatedPetData = {
            id: petId,
            name: "Buddy",
            status: "sold"
        };
        const response = await PetClient.postUpdatePet(petId, updatedPetData);

        expect(response.status).to.equal(200);
        expect(response.data.status).to.equal("sold");
    });

    it("Should delete the pet", async function () {
        const petName = "DeleteMe";
        const petStatus = "delete";
        const createPetResponse = await createPet(petName, petStatus);
        petId = createPetResponse.id;

        const response = await PetClient.deletePet(petId);

        expect(response.status).to.equal(200);
    });

    it("Should verify pet is deleted", async function () {
        const petName = "DeletedPet";
        const petStatus = "deleted";
        const createPetResponse = await createPet(petName, petStatus);
        petId = createPetResponse.id;

        const response = await PetClient.getPetById(petId).catch((error) => error.response);

        expect(response.status).to.equal(200);
    });
});
