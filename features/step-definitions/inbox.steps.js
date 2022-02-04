const { Given, When, Then } = require('@wdio/cucumber-framework');

const inboxPage = require('../pageobjects/inbox.page');

Then(/^I should see an Inbox page with Compose button$/, async () => {
  await expect(inboxPage.composeButton).toExist();
});
  
When(/^I click the Compose button$/, async () => {
  await inboxPage.composeButton.click();
});