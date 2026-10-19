# Automation Exercises – Beginner 2 (Playwright + JavaScript)

Practice project for **Tasks 103 → 114** on
https://www.tutorialspoint.com/selenium/practice/text-box.php

The structure is ready. **You** write the locators and the test steps.

---

## 1. Setup (once)
```bash
npm install
npx playwright install chromium
```
Install the VS Code extension **Playwright Test for VSCode** (VS Code suggests it automatically).

## 2. Project structure
```
pages/
  BasePage.js                 # shared: openHome(), takeScreenshot(), this.sideNav
  components/SideNavigation.js# the left menu - used by EVERY task (start here!)
  RadioButtonPage.js          # Task 103
  WebTablesPage.js            # Task 104
  ButtonsPage.js              # Task 105
  LinksPage.js                # Task 106
  UploadDownloadPage.js       # Task 107
  DynamicPropertiesPage.js    # Task 108
  PracticeFormPage.js         # Task 109
  BrowserWindowsPage.js       # Task 110
  AutoCompletePage.js         # Task 114
fixtures/pages.fixture.js     # injects page objects into tests
tests/task1xx-*.spec.js       # one test file per task (steps written as comments)
test-data/                    # JSON data + files to upload (txt, png)
utils/date.js                 # getDateMonthsAgo(2) for Task 109
screenshots/                  # your screenshots are saved here
```

## 3. How to work on a task
1. Open the spec file, e.g. `tests/task103-radio-button.spec.js`.
2. Change `test.fixme(` → `test(` (fixme = "skipped, not implemented yet").
3. Write the locators in the page object (`// TODO` lines in the constructor).
4. Write the action methods in the page object.
5. Uncomment / write the steps and **assertions** in the test.
6. Run it:
```bash
npx playwright test task103 --headed     # run one task and watch the browser
npx playwright test task103 --debug      # step line by line
npm run test:ui                          # UI mode (great for learning)
npm run report                           # open the HTML report
```
> Tip: implement `SideNavigation.open()` first – every task needs it.

## 4. Writing locators yourself (cheat sheet)
Open the page → right-click the element → **Inspect** → *read* the HTML, then write the locator.
(Per the exercise rules: don't use "Copy selector", codegen or the locator picker.)

| Priority | Locator | Use when the HTML looks like |
|---|---|---|
| 1 | `page.getByRole('button', { name: 'Submit' })` | `<button>Submit</button>` |
| 1 | `page.getByRole('link', { name: 'Home' })` | `<a href="...">Home</a>` |
| 1 | `page.getByRole('radio', { name: 'Yes' })` / `'checkbox'` / `'textbox'` | inputs with labels |
| 2 | `page.getByLabel('First Name')` | `<label for="fn">First Name</label><input id="fn">` |
| 2 | `page.getByPlaceholder('Enter email')` | `<input placeholder="Enter email">` |
| 3 | `page.getByText('You have checked', { exact: false })` | plain text messages |
| 4 | `page.locator('#firstname')` | element with a unique `id` |
| 4 | `page.locator('input[name="email"]')` | CSS by attribute |
| 5 | `page.locator('//button[text()="Add"]')` | XPath (last choice) |

Useful extras:
- `exact: true` → avoid "Click Me" matching "Double Click Me".
- `.first()`, `.last()`, `.nth(2)` → pick from several matches (Task 106: first/last link).
- Chaining: `page.locator('table tbody tr').filter({ hasText: 'Soha' })`.
- To check a locator you wrote, run the test with `--debug` and add `await expect(myLocator).toBeVisible()`.

## 5. No sleeps!
Never use `page.waitForTimeout()`. Playwright waits automatically:
- Actions (`click`, `fill`) wait until the element is ready.
- `await expect(locator).toBeVisible({ timeout: 10000 })` waits up to 10 s.
- `await locator.waitFor({ state: 'visible' })` for explicit waits (Task 108).
- New tab: `context().waitForEvent('page')` (Task 110).

## 6. Common assertions
```js
await expect(locator).toBeVisible();
await expect(locator).toHaveText('exact text');
await expect(locator).toContainText('part of text');
await expect(locator).toBeChecked();
await expect(locator).toHaveValue('Haskell');
await expect(locator).toHaveCount(0);
await expect(page).toHaveURL(/radio-button/);
```

## 7. Which tasks need what
| Task | New skill you'll learn |
|---|---|
| 103 | Side menu navigation, radio buttons, text assertion |
| 104 | Forms, screenshots, tables, deleting in a loop, `toHaveCount` |
| 105 | Choosing the exact button among similar ones |
| 106 | `first()` / `last()`, maybe a new tab |
| 107 | File upload with `setInputFiles` |
| 108 | Explicit waits (no sleep) |
| 109 | Full form: date picker, all checkboxes, upload, dropdowns |
| 110 | Handling a new browser tab |
| 114 | Autocomplete (typing + choosing a suggestion) |
