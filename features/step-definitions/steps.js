
const { Given, When, Then } = require('@wdio/cucumber-framework');

const expectChai = require('chai').expect;

const StartPage = require('../pageobjects/start.page');
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const InboxPage = require('../pageobjects/inbox.page');
const ComposePage = require('../pageobjects/compose.page');
const DraftsPage = require('../pageobjects/drafts.page');
const EditPage = require('../pageobjects/edit.page');
const SentPage = require('../pageobjects/sent.page');

Given(/^I am on the Start page$/, async () => {
  await StartPage.open('https://yahoo.com');
});

When(/^I click the SignIn button$/, async () => {
  await StartPage.loginButton.click();
});

Then(/^I should see a Login page$/, async () => {
  expectChai(await browser.getUrl()).to.include('https://login.yahoo.com');
});

Given(/^I am on the Login page$/, async () => {
  await expect(await LoginPage.inputEmailField).toExist();
});

When(/^I login to the mailbox account$/, async () => {
  await LoginPage.login();
});

Then(/^I should see a Home page$/, async () => {
  expectChai(await browser.getUrl()).to.include('https://www.yahoo.com');
});

Given(/^I am on the Home page$/, async () => {
  await expect(await HomePage.labelOfProfile).toExist();
});

When(/^I create the email and save it as a draft$/, async () => {
  await HomePage.mailButton.click();
  await expect(await InboxPage.composeButton).toExist();
  await InboxPage.composeButton.click();
  await ComposePage.createEmail();
  await ComposePage.draftsFolderButton.click();
});

Then(/^I should see this email in the Drafts folder$/, async () => {
  await expect(await DraftsPage.draftEmail).toExist();
});

Given(/^I am on the Drafts page$/, async () => {
  expectChai(await browser.getUrl()).to.be.equal('https://mail.yahoo.com/d/folders/3');
});

When(/^I open the created draft$/, async () => {
  await DraftsPage.draftEmailList.click();
  await expect(await EditPage.emailAddress).toExist();
  await expect(await EditPage.subject).toExist();
  await expect(await EditPage.body).toExist();
});

Then(/^I should verify its content$/, async () => {
  expectChai(await EditPage.emailAddress.getText()).to.be.equal('test1234512345@yopmail.com');
  expectChai(await EditPage.subject.getValue()).to.be.equal('The email testing!');
  expectChai(await EditPage.body.getText()).to.be.equal('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
});

Given(/^I am on the Edit page of the draft$/, async () => {
  expectChai(await browser.getUrl()).to.include('https://mail.yahoo.com/d/3/edit');
});

When(/^I send the draft email$/, async () => {
  await EditPage.sendButton.click();
});

Then(/^I should verify that draft email removed from the Draft folder$/, async () => {
  expectChai(await DraftsPage.emptyDraftFolder.isDisplayed()).to.be.equal(true);
});

Given(/^I am in the Drafts folder$/, async () => {
  expectChai(await browser.getUrl()).to.be.equal('https://mail.yahoo.com/d/folders/3');
});

When(/^I open the Sent folder$/, async () => {
  await DraftsPage.sentFolderButton.click();
});

Then(/^I should see the sent email$/, async () => {
  await expect(await SentPage.sentEmail).toExist();
});

Given(/^I am in the Sent folder$/, async () => {
  expectChai(await browser.getUrl()).to.be.equal('https://mail.yahoo.com/d/folders/2');
});

When(/^I logout from the mailbox account$/, async () => {
  await SentPage.profileItem.moveTo();
  await SentPage.logoutButton.waitForDisplayed();
  await SentPage.logoutButton.click();
});

Then(/^I should see the Start page$/, async () => {
  await expect(await StartPage.searchInput).toExist();
});
