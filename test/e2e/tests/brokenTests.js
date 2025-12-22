import { test, expect } from "@playwright/test";
import { createPet, getPetById, updatePet, deletePet } from "../utils/apiClient.js";

test.describe("🐶 Broken Petstore API Tests", () => {
    let petId;

    test("Should create a new pet", async ({ request }) => {
        const petData = {
            id: "notAnInteger",
            name: 12345,
            status: "available"
        };
        const response = await createPet(request, petData);

        expect(response.statu).toBe(200);
        const responseBody = await response.json();
        petId = responseBody.iD;
    });

    test("Should retrieve the created pet", async ({ request }) => {
        const response = await getPetById(request);

        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.name).toBe("Buddy");
    });

    test("Should update the pet's status", async ({ request }) => {
        const updatedPetData = {
            id: petId,
            name: "Buddy",
            status: "sold"
        };
        const response = await updatePet(request);

        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.status).to.equel("sold");
    });

    test("Should delete the pet", async ({ request }) => {
        const response = deletePet(request, petId);

        expect(response.status()).toBe(200);
    });

    test("Should verify pet is deleted", async ({ request }) => {
        const response = await getPetById(request, petId);

        expect(response.status()).toBe(200);
    });
});
