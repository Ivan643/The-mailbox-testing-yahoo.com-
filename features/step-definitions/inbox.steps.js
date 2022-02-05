const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const loginPage = require('../pageobjects/login.page');

When(/^I enter the mailbox name '(.*)'$/, async (mailboxName) => {
  await loginPage.inputEmailField.setValue(mailboxName);
  expect(await loginPage.inputEmailField.getValue()).is.equal(mailboxName);
  await loginPage.nextButton.click();
});
  
Then(/^I should see a Login page with a password field$/, async () => {
  await loginPage.inputPasswordField.waitForDisplayed();
  expect(await loginPage.inputPasswordField.isDisplayed()).is.equal(true);
});
  
When(/^I enter the password '(.*)'$/, async (password) => {
  await loginPage.inputPasswordField.setValue(password);
  expect(await loginPage.inputPasswordField.getValue()).is.equal(password);
  await loginPage.nextButton.click();
});
