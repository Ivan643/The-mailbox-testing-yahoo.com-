const { Given, When, Then } = require('@wdio/cucumber-framework');

const expectChai = require('chai').expect;

const draftsPage = require('../pageobjects/drafts.page');

Then(/^I should see the created draft in the Drafts folder$/, async () => {
  await expect(draftsPage.draftEmailList).toExist();
});

When(/^I click on the created draft$/, async () => {
  await draftsPage.draftEmailList.click();
});

Then(/^I should see that the draft has removed from the Drafts folder$/, async () => {
  expectChai(await draftsPage.emptyDraftFolder.isDisplayed()).to.be.equal(true);
});

When(/^I click the Sent folder button$/, async () => {
  await draftsPage.sentFolderButton.click();
});