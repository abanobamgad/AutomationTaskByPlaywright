const { test, expect } = require('../fixtures/pages.fixture');

test('Task 106 - "Not Found" link message, then "Home" page contains "login"', async ({ linksPage }) => { 
  // 1- Go to the site
  await linksPage.openHome();

  // 2- Side Navigation: Elements > Links
  await linksPage.sideNav.open('Elements', 'Links');

  // 3- Click on the last link "Not Found"
  await linksPage.clickNotFound();

  // 4- Assert that the message appeared
  await expect(linksPage.responseMessage).toBeVisible();

  // 5- Click on the first link "Home"
  const homePage = await linksPage.clickHome();

  // 6- Assert that the page contains "login"
  await expect(homePage.locator('body')).toContainText(/login/i);
});