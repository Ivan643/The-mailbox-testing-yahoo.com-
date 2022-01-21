import mailboxPage from './pages/mailbox.page';

describe('Verify main functionality of the mailbox', function() {

  it('should login to the mailbox',async function() {
    await mailboxPage.open();
    await mailboxPage.signIn();
    await mailboxPage.enterUsername(); 
    await mailboxPage.next();
    await mailboxPage.enterPassword();
    await mailboxPage.next();
  });

  it('should verify that the login was successfull',async function() {
    await expect(mailboxPage.labelOfProfile).toExist();
  });

  it('should create a new email and should save it to the drafts folder',async function() {
    await mailboxPage.mail();
    await mailboxPage.compose();
    await mailboxPage.enterAddress();
    await mailboxPage.enterSubject();
    await mailboxPage.enterBody();
    await mailboxPage.saveInDrafts();
  });

  it('should verify that the email presents in the drafts folder',async function() {
    await expect(mailboxPage.draftEmail).toExist();
  });

  it('should verify the draft content',async function() {
    await mailboxPage.openDraft();
    await expect(mailboxPage.emailAddress).toHaveTextContaining('test1234512345@yopmail.com');
    await expect(mailboxPage.subject).toHaveValueContaining('The email testing!');
    await expect(mailboxPage.body).toHaveTextContaining('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  });

  it('should send the email',async function() {
    await mailboxPage.send();
  });

  it('should verify that the email has removed from the drafts folder',async function() {
    await expect(mailboxPage.draftEmail).toExist();
  });

  it('should verify that the email is in Sent folder',async function() {
    await mailboxPage.openSentFolder()
    await expect(mailboxPage.sentEmail).toExist();
  });

  it('should logout from the account',async function() {
    await mailboxPage.openProfileItem();
    await mailboxPage.logout();
  });

  it('should verify that the logout was successfull',async function() {
    await expect(mailboxPage.loginButton).toExist();
  });
});