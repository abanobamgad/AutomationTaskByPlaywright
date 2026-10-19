// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  timeout: 30_000,
  expect: { timeout: 7_000 }, // auto-wait for assertions (no sleeps needed!)
  reporter: [['html', { open: 'never' }], ['list']],

  use: {
    baseURL: 'https://www.tutorialspoint.com/selenium/practice/',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10_000,
  },

  // Start with Chromium only. Add firefox/webkit later if you want.
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
