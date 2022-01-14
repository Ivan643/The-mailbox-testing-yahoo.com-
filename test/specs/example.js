describe('Verify main functionality of the mailbox', function() {

  var addressText = 'test1234512345@yopmail.com';
  var subjectText = 'The email testing!';
  var bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.';

  it('should login to the mailbox',async function() {
    await browser.url ("https://www.yahoo.com/");
    var loginButton = await $('._yb_k2zgk');
    await loginButton.click();
    var inputEmailField = await $('#login-username');
    await inputEmailField.click();
    await browser.keys('testmailbox123123@yahoo.com'); 
    var nextButton = await $('#login-signin');
    await nextButton.click();
    var inputPasswordField = $('#login-passwd');
    await inputPasswordField.click();
    await browser.keys('automatedTestingIsAwesome');
    await nextButton.click();
  });

  it('should verify that the login was successfull',async function() {
    var labelOfProfile = $('#ybarAccountMenuOpener');
    await expect(labelOfProfile).toExist();
  });

  it('should create a new email and should save it to the drafts folder',async function() {
    var mailButton = await $('#ybarMailLink');
    await mailButton.click();
    var composeButton = await $('a[href*="/d/compose/"]');
    await composeButton.click();
    var inputAddressField = await $('#message-to-field');
    await inputAddressField.click();
    await browser.keys(addressText);
    var inputSubjectField = await $('input[data-test-id*="compose-subject"]');
    await inputSubjectField.click();
    await browser.keys(subjectText);
    var inputBodyField = await $('#editor-container');
    await inputBodyField.click();
    await browser.keys(bodyText);
    var draftsFolderButton = await $('li div[data-test-folder-container*="Draft"]');
    await draftsFolderButton.click();
  });

  it('should verify that the email presents in the drafts folder',async function() {
    var draftEmail = await $('a[aria-label*="From: test1234512345@yopmail.com"]');
    await expect(draftEmail).toExist();
  });

  it('should verify the draft content',async function() {
    var draftEmail = await $('li a[aria-label*="From: test1234512345@yopmail.com"]');
    await draftEmail.click();
    var emailAddress = await $('.P_oRhLS');
    await expect(emailAddress).toHaveTextContaining(addressText);
    var subject = await $('input[data-test-id*="compose-subject"]');
    await expect(subject).toHaveValueContaining(subjectText);
    var body = await $('div[dir*="ltr"]');
    await expect(body).toHaveTextContaining(bodyText);

  });

  it('should send the email',async function() {
    var sendButton = await $('button[data-test-id*="compose-send-button"]');
    await sendButton.click();
  });

  it('should verify that the email has removed from the drafts folder',async function() {
    var draftEmail = await $('a[aria-label*="From: test1234512345@yopmail.com"]');
    await expect(draftEmail).toExist();
  });

  it('should verify that the email is in Sent folder',async function() {
    var sentFolderButton = await $('li div[data-test-folder-container*="Draft"]');
    await sentFolderButton.click();
    var sentEmail = await $('a[aria-label*="From: test1234512345@yopmail.com"]');
    await expect(sentEmail).toExist();
  });

  it('should logout from the account',async function() {
  var profileItem = await $('#ybarAccountMenu');
  await profileItem.moveTo();
  var logoutButton = await $('a#profile-signout-link');
  await logoutButton.waitForDisplayed();
  await logoutButton.click();
  });

  it('should verify that the logout was successfull',async function() {
    var loginButton = await $('._yb_k2zgk');
    await expect(loginButton).toExist();
  });
  
});
