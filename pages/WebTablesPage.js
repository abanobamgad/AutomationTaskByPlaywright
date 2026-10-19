const { BasePage } = require('./BasePage');
const { expect } = require('@playwright/test');

/** Task 104 - Elements > Web Tables */
class WebTablesPage extends BasePage {
  constructor(page) {
    super(page);
    // ---------- LOCATORS ----------
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.registerationForm = page.getByRole('heading', { name: 'Registration Form' });
    this.firstName = page.getByRole('textbox', { name: 'First Name: First Name:' });
    this.lastName = page.getByRole('textbox', { name: 'Last Name: Last Name:' });
    this.email = page.getByRole('textbox', { name: 'Email: Email:' });
    this.age = page.getByRole('textbox', { name: 'Age: Age:' });
    this.salary = page.getByRole('textbox', { name: 'Salary: Salary:' });
    this.departement = page.getByRole('textbox', { name: 'Department: Department:' });
    this.submitButton = page.getByRole('button', { name: 'Login' })
    this.table = page.getByRole('heading', { name: 'Web Tables' })
    this.tableRows = page.locator('table tbody tr');;
    this.deleteButton = page.getByRole('link', { name: 'delete' });
  }

  // ---------- ACTIONS ----------
  async clickAdd() {
    await this.addButton.click();
    await expect(this.registerationForm).toBeVisible();
  }

  /** @param {{firstName:string,lastName:string,email:string,age:string,salary:string,department:string}} record */
  async fillForm(record) {
    await this.firstName.fill(record.firstName);
    await this.lastName.fill(record.lastName);
    await this.age.fill(record.age);
    await this.email.fill(record.email);
    await this.salary.fill(record.salary);
    await this.departement.fill(record.department);
    
  }

  async submit() {
    await this.submitButton.click();
  }

  
  async deleteAllRecords() {
    const count = await this.deleteButton.count();

    for(let i = count; i > 0; i--)
    {
      await this.deleteButton.first().click();               // always delete the first one
      await expect(this.deleteButton).toHaveCount(i - 1); 
    }
  }
}

module.exports = { WebTablesPage };
