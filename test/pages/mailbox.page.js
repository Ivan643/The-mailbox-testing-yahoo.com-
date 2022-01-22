/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

const Page = require('./page');

class MailboxPage extends Page {
  get loginButton() { return $('.//*[@id="ybar-inner-wrap"]/div[3]/div/div[3]/div[1]/div/a'); }

  get inputEmailField() { return $('#login-username'); }

  get nextButton() { return $('#login-signin'); }

  get inputPasswordField() { return $('#login-passwd'); }

  get labelOfProfile() { return $('#ybarAccountMenuOpener'); }

  get mailButton() { return $('#ybarMailLink'); }

  get composeButton() { return $('a[href*="/d/compose/"]'); }

  get inputAddressField() { return $('#message-to-field'); }

  get inputSubjectField() { return $('input[data-test-id*="compose-subject"]'); }

  get inputBodyField() { return $('//*[@id="editor-container"]/div[1]'); }

  get draftsFolderButton() { return $('li div[data-test-folder-container*="Draft"]'); }

  get draftEmail() { return $('a[aria-label*="From: test1234512345@yopmail.com"]'); }

  get draftEmailList() { return $('//*[@id="mail-app-component"]/div/div/div[2]/div/div/div[2]/div/div[1]/ul/li[2]'); }

  get emailAddress() { return $('.P_oRhLS'); }

  get subject() { return $('input[data-test-id*="compose-subject"]'); }

  get body() { return $('div[dir*="ltr"]'); }

  get sendButton() { return $('button[data-test-id*="compose-send-button"]'); }

  get sentFolderButton() { return $('li div[data-test-folder-container*="Draft"]'); }

  get sentEmail() { return $('a[aria-label*="From: test1234512345@yopmail.com"]'); }

  get profileItem() { return $('#ybarAccountMenu'); }

  get logoutButton() { return $('//*[@id="profile-signout-link"]'); }

  async open() { super.open('https://www.yahoo.com/'); }

  async signIn() { this.loginButton.click(); }

  async enterUsername() { await this.inputEmailField.setValue('testmailbox123123@yahoo.com'); }

  async next() { await this.nextButton.click(); }

  async enterPassword() { await this.inputPasswordField.setValue('automatedTestingIsAwesome'); }

  async mail() { await this.mailButton.click(); }

  async compose() { await this.composeButton.click(); }

  async enterAddress() { await this.inputAddressField.setValue('test1234512345@yopmail.com'); }

  async enterSubject() { await this.inputSubjectField.setValue('The email testing!'); }

  async enterBody() { await this.inputBodyField.setValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'); }

  async saveInDrafts() { await this.draftsFolderButton.click(); }

  async openDraft() { await this.draftEmailList.click(); }

  async send() { await this.sendButton.click(); }

  async openSentFolder() { await this.sentFolderButton.click(); }

  async openProfileItem() { await this.profileItem.moveTo(); }

  async logout() { await this.logoutButton.waitForDisplayed(); this.logoutButton.click(); }
}

module.exports = new MailboxPage();