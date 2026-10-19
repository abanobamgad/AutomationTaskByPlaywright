const { BasePage } = require('./BasePage');

/** Task 106 - Elements > Links */
class LinksPage extends BasePage {
  constructor(page) {
    super(page);

    // LOCATORS
    this.homeLink        = page.getByRole('link', { name: 'Home', exact: true });
    this.notFoundLink    = page.getByRole('link', { name: 'Not Found', exact: true });
    this.responseMessage = page.getByText(/404/);   // message contains "404" (link text does not)
  }

  // METHODS
  async clickNotFound() {
    await this.notFoundLink.click();
  }

  
  async clickHome() {
    const newTabPromise = this.page.context().waitForEvent('page', { timeout: 5_000 }).catch(() => null);
    await this.homeLink.click();
    const newTab = await newTabPromise;

    if (newTab) {
      await newTab.waitForLoadState('domcontentloaded');
      return newTab;
    }
    return this.page;
  }
}

module.exports = { LinksPage };