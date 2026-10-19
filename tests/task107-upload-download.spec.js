const { test, expect } = require('../fixtures/pages.fixture');
const path = require('path');

test('Task 107 - Select a file for upload and take a screenshot', async ({ uploadDownloadPage }) => {
  const filePath = path.join(__dirname, '../test-data/files/sample-upload.txt');

  // 1- Go to the site
  await uploadDownloadPage.openHome();

  // 2- Side Navigation: Elements > Upload and Download
  await uploadDownloadPage.sideNav.open('Elements', 'Upload and Download');
  await expect(uploadDownloadPage.pageTitle).toBeVisible();

  // 3- Browse a file to be selected for upload
  await uploadDownloadPage.uploadFile(filePath);
  await expect(uploadDownloadPage.fileInput).toHaveValue(/sample-upload\.txt/);   // assert the file was selected

  // 4- Take a screenshot
  await uploadDownloadPage.takeScreenshot('task107-file-selected');
});