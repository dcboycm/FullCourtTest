import { expect } from "chai";
import PetClient from "../utils/apiClient.js";
import { createPet } from "../utils/testHelper.js";

describe("🐾 Petstore API Tests", function () {
    let petId;

    it("Should create a new pet", async function () {
        const petName = "Fluffy";
        const petStatus = "available";
        const response = await PetClient.postCreatePet({
            name: petName,
            status: petStatus
        })
        const petData = response.data
        expect(response.status).to.equal(200);
        expect(petData).to.have.property('id');
        expect(petData).to.have.property('name');
        expect(petData.name).to.equal(petName);
        expect(petData).to.have.property('status');
        expect(petData.status).to.equal(petStatus);
    });

    it("Should retrieve the created pet", async function () {
        const petName = "Scrappy";
        const petStatus = "pending";
        const createPetResponse = await createPet(petName, petStatus);
        petId = createPetResponse.id;

        const retrievePetResponse = await PetClient.getPetById(petId);
        // We are getting 404 error for retrieving newly created pet
        // should that be the case?
        expect(retrievePetResponse).to.have.status(200);
        expect(retrievePetResponse.data.name).to.equal(petName);
        expect(retrievePetResponse.data.status).to.equal(petStatus);
    });

    it("Should update the pet's status", async function () {
        const petName = "Scooby";
        const petStatus = "done";
        const createPetResponse = await createPet(petName, petStatus);
        petId = createPetResponse.id;

        const newPetStatus = "adopted";
        const updatedPetResponse = await PetClient.postUpdatePet(petId, newPetStatus);
        expect(updatedPetResponse.data.status).to.equal(newPetStatus);
    });

    it("Should delete the pet", async function () {
        const petName = "Clifford";
        const petStatus = "available";
        const createPetResponse = await createPet(petName, petStatus);
        petId = createPetResponse.id;

        // Again, we are getting 404 error for requests using petId
        // swagger docs requests shows same 404 but with message
        // java.lang.NumberFormatException: For input string: \"${PET_ID}\"
        const deletePetResponse = await PetClient.deletePet(petId);
        expect(deletePetResponse.status).to.equal(200);
    });

    it("Should verify pet is deleted", async function () {
        const petName = "Clifford";
        const petStatus = "available";
        const createPetResponse = await createPet(petName, petStatus);
        petId = createPetResponse.id;

        // Again, we are getting 404 error for requests using petId
        // swagger docs requests shows same 404 but with message
        // java.lang.NumberFormatException: For input string: \"${PET_ID}\"
        const deletePetResponse = await PetClient.deletePet(petId);
        expect(deletePetResponse.status).to.equal(200);

        const retrievePetResponse = await PetClient.getPetById(petId);
        expect(retrievePetResponse.status).to.equal(404);
    });

    it("Should not retrieve a pet with invalid id", async function () {
        const invalidPetId = 0;
        const retrievePetResponse = await PetClient.getPetById(invalidPetId);
        expect(retrievePetResponse.status).to.equal(404);
    });

    it("Should not update a pet with invalid id", async function () {
        const invalidPetId = 0;
        const updatedPetResponse = await PetClient.postUpdatePet(invalidPetId, { status: "adopted" });
        expect(updatedPetResponse.status).to.equal(415);
    });

    it("Should not delete a pet with invalid id", async function () {
        const invalidPetId = 0;
        const deletePetResponse = await PetClient.deletePet(invalidPetId);
        expect(deletePetResponse.status).to.equal(404);
    });
});
