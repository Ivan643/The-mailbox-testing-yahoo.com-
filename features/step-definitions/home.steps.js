const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const homePage = require('../pageobjects/home.page');

Then(/^I should see a Home page$/, async () => {
  expect(await homePage.labelOfProfile.isDisplayed()).is.equal(true);
});

When(/^I click the Mail button$/, async () => {
  await homePage.mailButton.click();
});
