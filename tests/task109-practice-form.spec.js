const { test, expect } = require('../fixtures/pages.fixture');
const path = require('path');
const data = require('../test-data/practice-form.json');
const { getDateMonthsAgo } = require('../utils/date');

test('Task 109 - Fill the whole Practice Form and take a screenshot', async ({ practiceFormPage }) => {
  const dateOfBirth = getDateMonthsAgo(2);
  const picturePath = path.join(__dirname, '..', data.picturePath);

  // 1- Go to the site
  await practiceFormPage.openHome();

  // 2- Side Navigation: Forms > Practice Form
  await practiceFormPage.sideNav.open('Forms', 'Practice Form');

  // 3- Fill all form fields
  await practiceFormPage.fillBasicInfo(data);
  await expect(practiceFormPage.nameInput).toHaveValue(data.name);

  // 4- Date of Birth: 2 months ago
  await practiceFormPage.selectDateOfBirth(dateOfBirth);
  await expect(practiceFormPage.dateOfBirthInput).not.toHaveValue('');

  // 5- Hobbies: select all
  await practiceFormPage.selectAllHobbies();
  for (const checkbox of await practiceFormPage.hobbiesCheckboxes.all()) {
    await expect(checkbox).toBeChecked();
  }

  // 6- Picture: upload
  await practiceFormPage.uploadPicture(picturePath);
  await expect(practiceFormPage.pictureInput).toHaveValue(/sample-picture\.png/);

  //    State & City
  await practiceFormPage.selectStateAndCity(data.state, data.city);

  // 7- Take a screenshot (the form doesn't submit)
  await practiceFormPage.takeScreenshot('task109-practice-form');
});