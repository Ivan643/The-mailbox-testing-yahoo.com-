const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const composePage = require('../pageobjects/compose.page');

Then(/^I should see a Compose page with Address, Subject and Body fields$/, async () => {
  expect(await composePage.inputAddressField.isDisplayed()).is.equal(true);
  expect(await composePage.inputSubjectField.isDisplayed()).is.equal(true);
  expect(await composePage.inputBodyField.isDisplayed()).is.equal(true);
});

When(/^I fill the Address field with '(.*)'$/, async (emailAddressText) => {
  await composePage.inputAddressField.setValue(emailAddressText);
});

When(/^I fill the Subject field with '(.*)'$/, async (subjectText) => {
  await composePage.inputSubjectField.setValue(subjectText);
});

When(/^I fill the Body field with '(.*)'$/, async (bodyText) => {
  await composePage.inputBodyField.setValue(bodyText);
});

When(/^I click the Drafts folder button$/, async () => {
  await composePage.draftsFolderButton.click();
});
