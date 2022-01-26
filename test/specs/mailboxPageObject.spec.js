
const StartPage = require('../pages/start.page');
const LoginPage = require('../pages/login.page');
const HomePage = require('../pages/home.page');
const InboxPage = require('../pages/inbox.page');
const ComposePage = require('../pages/compose.page');
const DraftsPage = require('../pages/drafts.page');
const EditPage = require('../pages/edit.page');
const SentPage = require('../pages/sent.page');

describe('Verify main functionality of the mailbox', () => {
  it('should login to the mailbox', async () => {
    await StartPage.open();
    await StartPage.loginButton.click();
    await expect(LoginPage.inputEmailField).toExist();
    await LoginPage.inputEmailField.setValue('testmailbox123123@yahoo.com');
    await LoginPage.nextButton.click();
    await expect(LoginPage.inputPasswordField).toExist();
    await LoginPage.inputPasswordField.setValue('automatedTestingIsAwesome');
    await LoginPage.nextButton.click();
  });

  it('should verify that the login was successfull', async () => {
    await expect(HomePage.labelOfProfile).toExist();
  });

  it('should create a new email and should save it to the drafts folder', async () => {
    await HomePage.mailButton.click();
    await expect(InboxPage.composeButton).toExist();
    await InboxPage.composeButton.click();
    await expect(ComposePage.inputAddressField).toExist();
    await expect(ComposePage.inputSubjectField).toExist();
    await expect(ComposePage.inputBodyField).toExist();
    await ComposePage.inputAddressField.setValue('test1234512345@yopmail.com');
    await ComposePage.inputSubjectField.setValue('The email testing!');
    await ComposePage.inputBodyField.setValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    await ComposePage.draftsFolderButton.click();
  });

  it('should verify that the email presents in the drafts folder', async () => {
    await expect(DraftsPage.draftEmail).toExist();
  });

  it('should verify the draft content', async () => {
    await DraftsPage.draftEmailList.click();
    await expect(EditPage.emailAddress).toHaveTextContaining('test1234512345@yopmail.com');
    await expect(EditPage.subject).toHaveValueContaining('The email testing!');
    await expect(EditPage.body).toHaveTextContaining('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  });

  it('should send the email', async () => {
    await EditPage.sendButton.click();
  });

  it('should verify that the email has removed from the drafts folder', async () => {
    await expect(DraftsPage.draftEmailList).toExist();
  });

  it('should verify that the email is in Sent folder', async () => {
    await DraftsPage.sentFolderButton.click();
    await expect(SentPage.sentEmail).toExist();
  });

  it('should logout from the account', async () => {
    await SentPage.profileItem.moveTo();
    await expect(SentPage.logoutButton).toExist();
    await SentPage.logout();
  });

  it('should verify that the logout was successfull', async () => {
    await expect(StartPage.loginButton).toExist();
  });
});
