const { BasePage } = require('./BasePage');

/** Task 107 - Elements > Upload and Download */
class UploadDownloadPage extends BasePage {
  constructor(page) {
    super(page);

    // LOCATORS
    this.pageTitle = page.getByRole('link', { name: 'Upload and Download' });
    this.fileInput = page.getByRole('button', { name: 'Select a file' });
  }

  // METHODS
  async uploadFile(filePath) {
    await this.fileInput.setInputFiles(filePath);
  }
}

module.exports = { UploadDownloadPage };