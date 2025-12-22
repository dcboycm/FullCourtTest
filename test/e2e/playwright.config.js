import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: './qa.env' });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['list']
  ],
  use: {
    baseURL: process.env.BASE_URL || 'https://petstore.swagger.io/v2',
    trace: 'on-first-retry',
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  },
  projects: [
    {
      name: 'API Tests',
      testMatch: '**/*.js',
    },
  ],
});
