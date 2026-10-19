const { BasePage } = require('./BasePage');

/** Task 110 - Alerts, Frames & Windows > Browser Windows */
class BrowserWindowsPage extends BasePage {
  constructor(page) {
    super(page);

    // LOCATORS
    // exact: true -> so it doesn't also match "New Window" / "New Window Message"
    this.newTabButton = page.getByRole('button', { name: 'New Tab' });
  }

  // METHODS
  /** Clicks "New Tab" and returns the new tab */
  async openNewTab() {
    const newTabPromise = this.page.context().waitForEvent('page');   // 1- start waiting for a new tab
    await this.newTabButton.click();                                    // 2- click
    const newTab = await newTabPromise;                                 // 3- get the new tab
    await newTab.waitForLoadState('domcontentloaded');                  // 4- wait for its content
    return newTab;
  }
}

module.exports = { BrowserWindowsPage };