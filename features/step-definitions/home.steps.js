const { Given, When, Then } = require('@wdio/cucumber-framework');

const homePage = require('../pageobjects/home.page');

Then(/^I should see a Home page$/, async () => {
    await expect(await homePage.labelOfProfile).toExist();
  });

When(/^I click the Mail button$/, async () => {
  await homePage.mailButton.click();
});