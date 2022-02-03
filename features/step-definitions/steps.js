
const { Given, When, Then } = require('@wdio/cucumber-framework');

const expectChai = require('chai').expect;

const startPage = require('../pageobjects/start.page');
const loginPage = require('../pageobjects/login.page');
const homePage = require('../pageobjects/home.page');
const inboxPage = require('../pageobjects/inbox.page');
const composePage = require('../pageobjects/compose.page');
const draftsPage = require('../pageobjects/drafts.page');
const editPage = require('../pageobjects/edit.page');
const sentPage = require('../pageobjects/sent.page');

// Scenario 01.
Given(/^I am on the Start page as an unuthorized user$/, async () => {
  await startPage.open('https://yahoo.com');
});

When(/^I click the Sign In button$/, async () => {
  await startPage.loginButton.click();
});

Then(/^I should see a Login page$/, async () => {
  expectChai(await browser.getUrl()).to.include('https://login.yahoo.com');
});

// Scenario 02.
Given(/^I am on the Login page$/, async () => {
  await loginPage.open('https://login.yahoo.com')
});

When(/^I enter the mailbox name 'testmailbox123123@yahoo.com'$/, async () => {
  await loginPage.inputEmailField.setValue('testmailbox123123@yahoo.com');
  expectChai(await loginPage.inputEmailField.getValue()).to.be.equal('testmailbox123123@yahoo.com');
  await loginPage.nextButton.click();
});

Then(/^I should see a Login page with a password field$/, async () => {
  await expect(await loginPage.inputPasswordField).toExist();
});

// Scenario 03.
When(/^I enter the password 'automatedTestingIsAwesome'$/, async () => {
  await loginPage.inputPasswordField.setValue('automatedTestingIsAwesome');
  expectChai(await loginPage.inputPasswordField.getValue()).to.be.equal('automatedTestingIsAwesome');
  await loginPage.nextButton.click();
});

Then(/^I should see a Home page$/, async () => {
  await expect(await homePage.labelOfProfile).toExist();
});

// Scenario 04.
Given(/^I am on the Home page as an authorized user$/, async () => {
  await homePage.open('https://www.yahoo.com');
  await startPage.loginButton.click();
  await loginPage.login();
});

When(/^I click the Mail button$/, async () => {
  await homePage.mailButton.click();
});

Then(/^I should see an Inbox page with Compose button$/, async () => {
  await expect(inboxPage.composeButton).toExist();
});

// Scenario 05.
Given(/^I am on the Inbox page as an authorized user$/, async () => {
  await inboxPage.open('https://mail.yahoo.com/d/folders/1');
  await loginPage.login();
});

When(/^I click the Compose button$/, async () => {
  await inboxPage.composeButton.click();
});

Then(/^I should see a Compose page with Address, Subject and Body fields$/, async () => {
  await expect(composePage.inputAddressField).toExist();
  await expect(composePage.inputSubjectField).toExist();
  await expect(composePage.inputBodyField).toExist();
});

// Scenario 06.
Given(/^I am on the Compose page as an authorized user$/, async () => {
  await composePage.open('https://mail.yahoo.com/d/compose/');
  await loginPage.login();
});

When(/^I fill the Address field with 'test1234512345@yopmail.com'$/, async () => {
  await composePage.inputAddressField.setValue('test1234512345@yopmail.com');
});

When(/^I fill the Subject field with 'The email testing!'$/, async () => {
  await composePage.inputSubjectField.setValue('The email testing!');
});

When(/^I fill the Body field with 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'$/, async () => {
  await composePage.inputBodyField.setValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
});

When(/^I click the Drafts folder button$/, async () => {
  await composePage.draftsFolderButton.click();
});

Then(/^I should see the created draft in the Drafts folder$/, async () => {
  await expect(draftsPage.draftEmailList).toExist();
});

// Scenario 07.
Given(/^I am on the Drafts page as an authorized user$/, async () => {
  await draftsPage.open('https://mail.yahoo.com/d/folders/3');
  await loginPage.login();
});

When(/^I click on the created draft$/, async () => {
  await draftsPage.draftEmailList.click();
});

Then(/^I should verify its content$/, async () => {
  await expect(await editPage.emailAddress).toHaveText('test1234512345@yopmail.com');
  await expect(await editPage.subject).toHaveValue('The email testing!');
  await expect(await editPage.body).toHaveText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
});

// Scenario 08.
When(/^I click the Send button$/, async () => {
  await editPage.sendButton.click();
});

Then(/^I should see that the draft has removed from the Drafts folder$/, async () => {
  expectChai(await draftsPage.emptyDraftFolder.isDisplayed()).to.be.equal(true);
});

// Scenario 09.
When(/^I click the Sent folder button$/, async () => {
  await draftsPage.sentFolderButton.click();
});

Then(/^I should see the sent email in the Sent folder$/, async () => {
  await expect(await sentPage.sentEmail).toExist();
});

// Scenario 10.
When(/^I open the sent email$/, async () => {
  await sentPage.sentEmail.click();
});

Then(/^I expect email matches pattern "(.*)" on page$/, (regex) => {
  const actualEmailOfReceiver = sentPage.actualEmailOfReceiver.getText();
  const pattern = new RegExp(regex);
  const isMatch = pattern.test(actualEmailOfReceiver);
  expectChai(isMatch).to.be.equal(true);
});

// Scenario 11.
When(/^I hover on the profile icon$/, async () => {
  await sentPage.profileItem.moveTo();
});

When(/^I click the Sign Out button$/, async () => {
  await sentPage.logoutButton.waitForDisplayed();
  await sentPage.logoutButton.click();
});

Then(/^I should see the Start page$/, async () => {
  await expect(await startPage.loginButton).toExist();
});
