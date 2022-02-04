const { Given, When, Then } = require('@wdio/cucumber-framework');

const editPage = require('../pageobjects/edit.page');

Then(/^I should verify its content$/, async () => {
  await expect(await editPage.emailAddress).toHaveText('test1234512345@yopmail.com');
  await expect(await editPage.subject).toHaveValue('The email testing!');
  await expect(await editPage.body).toHaveText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
});
  
When(/^I click the Send button$/, async () => {
  await editPage.sendButton.click();
});