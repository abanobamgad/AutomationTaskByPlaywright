const { test, expect } = require('../fixtures/pages.fixture');

test('Task 105 - Click "Click Me" and assert the message', async ({ buttonsPage }) => {
  // 1- Go to the site
  await buttonsPage.openHome();

  // 2- Side Navigation: Elements > Buttons
  await buttonsPage.sideNav.open('Elements', 'Buttons');

  // 3- Click on "Click Me"
  await buttonsPage.clickMe();

  // 4- Assert that the message appeared
  await expect(buttonsPage.clickMeMessage).toBeVisible();
});