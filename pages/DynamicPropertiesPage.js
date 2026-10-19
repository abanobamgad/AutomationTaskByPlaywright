const { BasePage } = require('./BasePage');

/** Task 108 - Elements > Dynamic Properties */
class DynamicPropertiesPage extends BasePage {
  constructor(page) {
    super(page);

    // LOCATORS
    this.colorChangeButton      = page.getByRole('button', { name: 'Color Change' });
    this.visibleAfter5SecButton = page.getByRole('button', { name: 'Visible After 5 Seconds' });
  }

  // METHODS
  async clickColorChange() {
    await this.colorChangeButton.click();
  }

  // Explicit wait 
  async waitForVisibleButton() {
    await this.visibleAfter5SecButton.waitFor({ state: 'visible', timeout: 10_000 });
  }
}

module.exports = { DynamicPropertiesPage };