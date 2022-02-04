const { Given, When, Then } = require('@wdio/cucumber-framework');

const expectChai = require('chai').expect;

const loginPage = require('../pageobjects/login.page');

When(/^I enter the mailbox name 'testmailbox123123@yahoo.com'$/, async () => {
  await loginPage.inputEmailField.setValue('testmailbox123123@yahoo.com');
  expectChai(await loginPage.inputEmailField.getValue()).to.be.equal('testmailbox123123@yahoo.com');
  await loginPage.nextButton.click();
});
  
Then(/^I should see a Login page with a password field$/, async () => {
  await expect(await loginPage.inputPasswordField).toExist();
});
  
When(/^I enter the password 'automatedTestingIsAwesome'$/, async () => {
  await loginPage.inputPasswordField.setValue('automatedTestingIsAwesome');
  expectChai(await loginPage.inputPasswordField.getValue()).to.be.equal('automatedTestingIsAwesome');
  await loginPage.nextButton.click();
});