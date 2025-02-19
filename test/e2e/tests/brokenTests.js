import { expect } from "chai";
import apiClient from "../utils/apiClient.js";
import { createPet, getPetById, updatePet, deletePet } from "../utils/apiClient.js";

describe("🐶 Broken Petstore API Tests", function () {
    let petId;

    it("Should create a new pet", async function () {
        const petData = {
            id: "notAnInteger",
            name: 12345,
            status: "available"
        };
        const response = await createPet(petData);

        expect(response.statu).to.equal(200);
        petId = response.data.iD;
    });

    it("Should retrieve the created pet", async function () {
        const response = await getPetById();

        expect(response.status).to.equal(200);
        expect(response.data.name).to.equal("Buddy");
    });

    it("Should update the pet's status", async function () {
        const updatedPetData = {
            id: petId,
            name: "Buddy",
            status: "sold"
        };
        const response = await updatePet();

        expect(response.status).to.equal(200);
        expect(response.data.status).to.equel("sold");
    });

    it("Should delete the pet", async function () {
        const response = deletePet(petId);

        expect(response.status).to.equal(200);
    });

    it("Should verify pet is deleted", async function () {
        const response = await getPetById(petId).catch((error) => error.response);

        expect(response.status).to.equal(200);
    });
});
