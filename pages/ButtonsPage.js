const { BasePage } = require('./BasePage');

/** Task 105 - Elements > Buttons */
class ButtonsPage extends BasePage {
  constructor(page) {
    super(page);

    // LOCATORS
    this.clickMeButton  = page.getByRole('button', { name: 'Click Me', exact: true });
    this.clickMeMessage = page.getByText('You have done a dynamic click');
  }

  // METHODS
  async clickMe() {
    await this.clickMeButton.click();
  }
}

module.exports = { ButtonsPage };