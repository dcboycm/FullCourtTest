import { expect } from "chai";
import PetClient from "../utils/apiClient.js";

describe("🐾 Petstore API Tests", function () {
    let petId;

    it("Should create a new pet", async function () {
        const petName = "Fluffy";
        const petStatus = "available";
        const response = await PetClient.createPet({
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

    });

    it("Should update the pet's status", async function () {

    });

    it("Should delete the pet", async function () {

    });

    it("Should verify pet is deleted", async function () {

    });
});
