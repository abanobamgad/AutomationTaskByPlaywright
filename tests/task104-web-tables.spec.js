const { test, expect } = require('../fixtures/pages.fixture');
const record = require('../test-data/web-table-record.json');

test('Task 104 - Add a record, delete all, assert table is empty', async ({ webTablesPage }) => {
  // 1- Go to text-box.php
  await webTablesPage.openHome();

  // 2- From Side Navigation, select "Elements > Web Tables"
  await webTablesPage.sideNav.open('Elements' , 'Web Tables');

  // 3- Click on Add
  await webTablesPage.clickAdd();

  // 4- Fill the form (use the "record" test data)
  await webTablesPage.fillForm(record);

  // 5- Take a screenshot
  await webTablesPage.takeScreenshot('task104-filled-form');

  // 6- Click on Submit
  await webTablesPage.submit();
  

  // 7- Then Delete All Records
  await webTablesPage.deleteAllRecords();
  await expect(webTablesPage.deleteButton).toHaveCount(0);

  
});
