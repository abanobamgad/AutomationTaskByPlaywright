const { SideNavigation } = require('./components/SideNavigation');


class BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.sideNav = new SideNavigation(page);
  }

  /** Opens the starting page used by every task */
  async openHome() {
    await this.page.goto('text-box.php');
  }

  
  async takeScreenshot(name) {
    await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }
}

module.exports = { BasePage };
