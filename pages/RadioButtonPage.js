const { BasePage } = require('./BasePage');

class RadioButtonPage extends BasePage {
  constructor(page) {
    super(page);

    // LOCATORS  (replace the text inside ' ' with what you find)
    this.impressiveRadio = page.getByRole('radio').nth(1);
    this.resultMessage   = page.getByText('You have checked Impressive');
  }

  // METHODS
  async checkImpressive() {
    await this.impressiveRadio.check();
  }
}

module.exports = { RadioButtonPage };