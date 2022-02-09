const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const sentPage = require('../pageobjects/sent.page');

Then(/^I should see the sent email in the Sent folder$/, async () => {
  await sentPage.sentEmail.waitForDisplayed();
  expect(await sentPage.sentEmail.isDisplayed()).is.equal(true);
});

When(/^I open the sent email$/, async () => {
  await sentPage.sentEmail.click();
});

Then(/^I expect email matches pattern "(.*)" on page$/, async (regex) => {
  const actualEmailOfReceiver = await sentPage.actualEmailOfReceiver.getText();
  const pattern = new RegExp(regex);
  const isMatch = pattern.test(actualEmailOfReceiver);
  expect(isMatch).is.equal(true);
});

When(/^I hover on the profile icon$/, async () => {
  await sentPage.profileItem.moveTo();
});

When(/^I click the Sign Out button$/, async () => {
  await sentPage.logoutButton.waitForDisplayed();
  await sentPage.logoutButton.click();
});

When(/^I click the Delete button$/, async () => {
  await sentPage.deleteButton.click();
});

Then(/^I should see the informational message about the successful mail deleting$/, async () => {
  await sentPage.messageDelete.waitForDisplayed();
  expect(await sentPage.messageDelete.isDisplayed()).is.equal(true);
});
