/* eslint-disable no-undef */

const MailboxPage = require('../pages/mailbox.page');

describe('Verify main functionality of the mailbox', () => {
  it('should login to the mailbox', async () => {
    await MailboxPage.open();
    await MailboxPage.signIn();
    await MailboxPage.enterUsername();
    await MailboxPage.next();
    await MailboxPage.enterPassword();
    await MailboxPage.next();
  });

  it('should verify that the login was successfull', async () => {
    await expect(MailboxPage.labelOfProfile).toExist();
  });

  it('should create a new email and should save it to the drafts folder', async () => {
    await MailboxPage.mail();
    await MailboxPage.compose();
    await MailboxPage.enterAddress();
    await MailboxPage.enterSubject();
    await MailboxPage.enterBody();
    await MailboxPage.saveInDrafts();
  });

  it('should verify that the email presents in the drafts folder', async () => {
    await expect(MailboxPage.draftEmail).toExist();
  });

  it('should verify the draft content', async () => {
    await MailboxPage.openDraft();
    await expect(MailboxPage.emailAddress).toHaveTextContaining('test1234512345@yopmail.com');
    await expect(MailboxPage.subject).toHaveValueContaining('The email testing!');
    await expect(MailboxPage.body).toHaveTextContaining('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  });

  it('should send the email', async () => {
    await MailboxPage.send();
  });

  it('should verify that the email has removed from the drafts folder', async () => {
    await expect(MailboxPage.draftEmailList).toExist();
  });

  it('should verify that the email is in Sent folder', async () => {
    await MailboxPage.openSentFolder();
    await expect(MailboxPage.sentEmail).toExist();
  });

  it('should logout from the account', async () => {
    await MailboxPage.openProfileItem();
    await MailboxPage.logout();
  });

  it('should verify that the logout was successfull', async () => {
    await expect(MailboxPage.loginButton).toExist();
  });
});
