const { test, expect } = require('../fixtures/pages.fixture');

test('Task 108 - Wait for "Visible After 5 Seconds" button (no sleep!)', async ({ dynamicPropertiesPage }) => {
  // 1- Go to text-box.php
  await dynamicPropertiesPage.openHome();

  // 2- Expand "Elements", click "Dynamic Properties", then click "Color Change"
  await dynamicPropertiesPage.sideNav.open('Elements' , 'Dynamic Properties');
  await dynamicPropertiesPage.clickColorChange();

  // 3- Wait for the second button "Visible after 5 seconds" to be displayed
  await dynamicPropertiesPage.waitForVisibleButton();

  // 4- Assert that the button had appeared
  await expect(dynamicPropertiesPage.visibleAfter5SecButton).toBeVisible();
});
