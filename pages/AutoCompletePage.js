const { BasePage } = require('./BasePage');

/** Task 114 - Widgets > Auto Complete */
class AutoCompletePage extends BasePage {
  constructor(page) {
    super(page);

    // LOCATORS
    this.searchInput = page.getByRole('textbox', { name: 'Tags:' });                    
    this.suggestion  = (text) => page.getByText(text, { exact: true });      
  }

  // METHODS
  async typeAndSelect(text, suggestionText) {
    await this.searchInput.click();
    await this.searchInput.pressSequentially(text, { delay: 100 });   // types key by key like a real user
    await this.suggestion(suggestionText).click();                    // auto-waits until "Haskell" appears
  }
}

module.exports = { AutoCompletePage };