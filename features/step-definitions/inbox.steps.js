const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const inboxPage = require('../pageobjects/inbox.page');

Then(/^I should see an Inbox page with Compose button$/, async () => {
  expect(await inboxPage.composeButton.isDisplayed()).is.equal(true);
});
  
When(/^I click the Compose button$/, async () => {
  await inboxPage.composeButton.click();
});
