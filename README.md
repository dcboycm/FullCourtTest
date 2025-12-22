# Introduction
FullCourtTest is an API testing project skeleton for interviewing potential candidates. It uses Playwright to send requests and verify responses, ensuring the API returns accurate and reliable data.

# Features
- 🚀 Automated API tests with Playwright
- 🔍 Validates understanding of testing API's
- 📊 Generates JUnit test reports for analysis
- 🔐 Supports environment variables with dotenv

# Objective
Your task is to implement API test cases for the [Petstore API](https://petstore.swagger.io/#/) using Node.js with Playwright. You will also be required to debug and fix a broken test.

# Getting Started
1.	Clone the repository

2.	Install dependencies:

    `npm install`

3.	Use the provided .env file to configure the API base URL.

4.	Run tests:

    `npm test`


# Tasks
1. CRUD operations for Pets endpoint
- Create a pet (POST /pet)
- Get pet details (GET /pet/{petId})
- Update a pet (PUT /pet)
- Delete a pet (DELETE /pet/{petId})

2. Validate Response Structure and Status Codes
- Correct HTTP status codes (e.g., 200 OK, 404 Not Found).
- Expected response body (Check attributes like id, name, status).
- Proper handling of invalid requests (e.g., querying a non-existent pet).

3. Debug and Fix a Broken Test
- You will find a pre-written test in the test/e2e/tests/brokenTests.js file.
- Your task: Fix the test so that it runs successfully.
- The test might have incorrect assertions, missing data, or API request issues.
- Debug and resolve any issues while ensuring correctness.
