const { BasePage } = require('./BasePage');
const { toISODate } = require('../utils/date');

/** Task 109 - Forms > Practice Form */
class PracticeFormPage extends BasePage {
  constructor(page) {
    super(page);
    // ---------- LOCATORS ----------
     this.nameInput = page.getByRole('textbox', { name: 'Name:' });
     this.emailInput = page.getByRole('textbox', { name: 'Email:' });
     this.genderRadio = (gender) =>
       page.locator('input[type="radio"]').nth(['Male', 'Female', 'Other'].indexOf(gender));       // a function locator: returns the radio for 'Male' / 'Female' / 'Other'
     this.mobileInput = page.getByRole('textbox', { name: 'Mobile(10 Digits):' });
     this.dateOfBirthInput = page.getByRole('textbox', { name: 'Date of Birth:' });              // the date field / calendar icon
     this.subjectsInput = page.getByRole('textbox', { name: 'Subjects:' });
     this.hobbiesCheckboxes = page.getByRole('checkbox');           // ALL hobby checkboxes   Hint: page.getByRole('checkbox')
     this.pictureInput = page.locator('form input[type="file"]');                  // <input type="file">
     this.addressInput = page.getByRole('textbox', { name: 'Currend Address' });
     this.stateSelect = page.locator('#state');                   // dropdown -> selectOption()
     this.citySelect = page.locator('#city');
     this.submitButton = page.getByRole('button', { name: 'Login' });
  }

  // ---------- ACTIONS ----------
  
  async fillBasicInfo(data) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.genderRadio(data.gender).check();
    await this.mobileInput.fill(data.mobile);
    await this.subjectsInput.fill(data.subjects);
    await this.addressInput.fill(data.address);
  }

  
  async selectDateOfBirth(date) {
  
    await this.dateOfBirthInput.fill(toISODate(date));   // e.g. "2026-08-03"
  }
  

  
  async selectAllHobbies() {
    for (const checkbox of await this.hobbiesCheckboxes.all()) {
      await checkbox.check();
    }
  }

  async uploadPicture(filePath) {
    await this.pictureInput.setInputFiles(filePath);
  }

  async selectStateAndCity(state, city) {
    await this.stateSelect.selectOption({ label: state });
    await this.citySelect.selectOption({ label: city });
  }
}

module.exports = { PracticeFormPage };
