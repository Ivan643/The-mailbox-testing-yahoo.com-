const { Given, When, Then } = require('@wdio/cucumber-framework');

const composePage = require('../pageobjects/compose.page');

Then(/^I should see a Compose page with Address, Subject and Body fields$/, async () => {
  await expect(composePage.inputAddressField).toExist();
  await expect(composePage.inputSubjectField).toExist();
  await expect(composePage.inputBodyField).toExist();
});
  
When(/^I fill the Address field with 'test1234512345@yopmail.com'$/, async () => {
  await composePage.inputAddressField.setValue('test1234512345@yopmail.com');
});
  
When(/^I fill the Subject field with 'The email testing!'$/, async () => {
  await composePage.inputSubjectField.setValue('The email testing!');
});
  
When(/^I fill the Body field with 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'$/, async () => {
  await composePage.inputBodyField.setValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
});
  
When(/^I click the Drafts folder button$/, async () => {
  await composePage.draftsFolderButton.click();
});