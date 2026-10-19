const { test, expect } = require('../fixtures/pages.fixture');

test('Task 110 - Open "New Tab" and assert it contains "New Tab"', async ({ browserWindowsPage }) => {
  // 1- Go to the site
  await browserWindowsPage.openHome();

  // 2- Side Navigation: Alerts, Frames & Windows > Browser Windows
  await browserWindowsPage.sideNav.open('Alerts, Frames & Windows', 'Browser Windows');

  // 3- Click on "New Tab"  &  4- Go to the opened tab
  const newTab = await browserWindowsPage.openNewTab();

  // 5- Assert that the page contains "New Tab"
  await expect(newTab.locator('body')).toContainText('New Tab');
});