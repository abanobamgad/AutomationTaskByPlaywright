const { test, expect } = require('../fixtures/pages.fixture');

test('Task 114 - Type "a" and choose "Haskell"', async ({ autoCompletePage }) => {
  // 1- Go to the site
  await autoCompletePage.openHome();

  // 2- Side Navigation: Widgets > Auto Complete
  await autoCompletePage.sideNav.open('Widgets', 'Auto Complete');

  // 3- Type "a" then click on "Haskell"
  await autoCompletePage.typeAndSelect('a', 'Haskell');

  // Assert (the task has none - always add one!)
  await expect(autoCompletePage.searchInput).toHaveValue('Haskell');
});