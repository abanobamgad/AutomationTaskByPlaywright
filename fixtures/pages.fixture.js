// Gives every test ready-made page objects:  test('...', async ({ radioButtonPage }) => { ... })
const base = require('@playwright/test');
const { RadioButtonPage } = require('../pages/RadioButtonPage');
const { WebTablesPage } = require('../pages/WebTablesPage');
const { ButtonsPage } = require('../pages/ButtonsPage');
const { LinksPage } = require('../pages/LinksPage');
const { UploadDownloadPage } = require('../pages/UploadDownloadPage');
const { DynamicPropertiesPage } = require('../pages/DynamicPropertiesPage');
const { PracticeFormPage } = require('../pages/PracticeFormPage');
const { BrowserWindowsPage } = require('../pages/BrowserWindowsPage');
const { AutoCompletePage } = require('../pages/AutoCompletePage');

const test = base.test.extend({
  radioButtonPage: async ({ page }, use) => use(new RadioButtonPage(page)),
  webTablesPage: async ({ page }, use) => use(new WebTablesPage(page)),
  buttonsPage: async ({ page }, use) => use(new ButtonsPage(page)),
  linksPage: async ({ page }, use) => use(new LinksPage(page)),
  uploadDownloadPage: async ({ page }, use) => use(new UploadDownloadPage(page)),
  dynamicPropertiesPage: async ({ page }, use) => use(new DynamicPropertiesPage(page)),
  practiceFormPage: async ({ page }, use) => use(new PracticeFormPage(page)),
  browserWindowsPage: async ({ page }, use) => use(new BrowserWindowsPage(page)),
  autoCompletePage: async ({ page }, use) => use(new AutoCompletePage(page)),
});

module.exports = { test, expect: base.expect };
