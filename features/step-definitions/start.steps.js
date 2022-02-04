const { Given, When, Then } = require('@wdio/cucumber-framework');

const expectChai = require('chai').expect;

const startPage = require('../pageobjects/start.page');

Given(/^I am on the Start page as an unuthorized user$/, async () => {
  await startPage.open('https://yahoo.com');
});

When(/^I click the Sign In button$/, async () => {
  await startPage.loginButton.click();
});

Then(/^I should see a Login page$/, async () => {
  expectChai(await browser.getUrl()).to.include('https://login.yahoo.com');
});

Then(/^I should see the Start page$/, async () => {
  await expect(await startPage.loginButton).toExist();
});
