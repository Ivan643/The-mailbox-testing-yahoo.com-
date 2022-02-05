const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const editPage = require('../pageobjects/edit.page');

Then(/^I should verify that the Email Address is actually '(.*)'$/, async (emailAddressText) => {
  expect(await editPage.emailAddress.getText()).is.equal(emailAddressText);
});

Then(/^I should verify that the Subject is actually '(.*)'$/, async (subjectText) => {
  expect(await editPage.subject.getValue()).is.equal(subjectText);
});

Then(/^I should verify that the Body is actually '(.*)'$/, async (bodyText) => {
  expect(await editPage.body.getText()).is.equal(bodyText);
});
  
When(/^I click the Send button$/, async () => {
  await editPage.sendButton.click();
});
