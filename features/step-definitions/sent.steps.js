const { Given, When, Then } = require('@wdio/cucumber-framework');

const expectChai = require('chai').expect;

const sentPage = require('../pageobjects/sent.page');

Then(/^I should see the sent email in the Sent folder$/, async () => {
  await expect(await sentPage.sentEmail).toExist();
});
  
When(/^I open the sent email$/, async () => {
  await sentPage.sentEmail.click();
});
  
Then(/^I expect email matches pattern "(.*)" on page$/, async (regex) => {
  const actualEmailOfReceiver = await sentPage.actualEmailOfReceiver.getText();
  const pattern = new RegExp(regex);
  const isMatch = pattern.test(actualEmailOfReceiver);
  expectChai(isMatch).to.be.equal(true);
});
  
When(/^I hover on the profile icon$/, async () => {
  await sentPage.profileItem.moveTo();
});
  
When(/^I click the Sign Out button$/, async () => {
  await sentPage.logoutButton.waitForDisplayed();
  await sentPage.logoutButton.click();
});