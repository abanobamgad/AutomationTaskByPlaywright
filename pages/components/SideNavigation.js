class SideNavigation {
  constructor(page) {
    this.page = page;
  }

  // LOCATOR: menu header like "Elements", "Forms", "Widgets"
  sectionHeader(sectionName) {
    return this.page.getByRole('button', { name: sectionName });
  }

  // LOCATOR: menu link like "Radio Button", "Web Tables"
  menuItem(itemName) {
    return this.page.getByRole('link', { name: itemName, exact: true });
  }

  // METHOD: open the header, then click the link
  async open(sectionName, itemName) {
    const item = this.menuItem(itemName);
    if (!(await item.isVisible())) {
      await this.sectionHeader(sectionName).click();
    }
    await item.click();
  }
}

module.exports = { SideNavigation };