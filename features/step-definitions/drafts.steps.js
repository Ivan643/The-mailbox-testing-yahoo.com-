const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const draftsPage = require('../pageobjects/drafts.page');

Then(/^I should see the created draft in the Drafts folder$/, async () => {
  await draftsPage.draftEmailList.waitForDisplayed();
  expect(await draftsPage.draftEmailList.isDisplayed()).is.equal(true); 
});

When(/^I open the created draft$/, async () => {
  await draftsPage.draftEmailList.click();
});

Then(/^I should see that the draft has removed from the Drafts folder$/, async () => {
  await draftsPage.draftEmailList.waitForDisplayed({reverse: true});
  expect(await draftsPage.draftEmailList.isDisplayed()).is.equal(false);
});

When(/^I click the Sent folder button$/, async () => {
  await draftsPage.sentFolderButton.click();
});
