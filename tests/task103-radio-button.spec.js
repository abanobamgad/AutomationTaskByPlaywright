const { test, expect } = require('../fixtures/pages.fixture');

test('Task 103 - Check Impressive and assert the message', async ({ radioButtonPage }) => {
  await radioButtonPage.openHome();                                   // 1- go to the site
  await radioButtonPage.sideNav.open('Elements', 'Radio Button');     // 2- menu: Elements > Radio Button
  await radioButtonPage.checkImpressive();                            // 3- check Impressive
  await expect(radioButtonPage.resultMessage).toContainText('Impressive'); // 4- assert
});