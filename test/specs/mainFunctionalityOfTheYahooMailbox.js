describe('Verify main functionality of the mailbox', function() {

    var addressText = 'test1234512345@yopmail.com';
    var subjectText = 'The email testing!';
    var bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.';

  it('should login to the mailbox', async function() {
    await browser.url ("https://www.yahoo.com/");
    await $('._yb_k2zgk').click();
    await $('#login-username').click();
    await browser.keys('testmailbox123123@yahoo.com'); 
    await $('#login-signin').click();
    await $('#login-passwd').click();
    await browser.keys('automatedTestingIsAwesome');
    await nextButton.click();
  });

  it('should verify that the login was successfull', async function() {
    await expect($('#ybarAccountMenuOpener')).toExist();
  });

  it('should create a new email and should save it to the drafts folder', async function() {
    var mailButton = ;
    await $('#ybarMailLink').click();
    await $('a[href*="/d/compose/"]').click();
    await $('#message-to-field').click();
    await browser.keys(addressText);
    await $('input[data-test-id*="compose-subject"]').click();
    await browser.keys(subjectText);
    await $('#editor-container').click();
    await browser.keys(bodyText);
    await $('li div[data-test-folder-container*="Draft"]').click();
  });

  it('should verify that the email presents in the drafts folder', async function() {
    await expect($('a[aria-label*="From: test1234512345@yopmail.com"]')).toExist();
  });

  it('should verify the draft content', async function() {
    await $('li a[aria-label*="From: test1234512345@yopmail.com"]').click();
    await expect($('.P_oRhLS')).toHaveTextContaining(addressText);
    await expect($('input[data-test-id*="compose-subject"]')).toHaveValueContaining(subjectText);
    await expect($('div[dir*="ltr"]')).toHaveTextContaining(bodyText);
  });

  it('should send the email', async function() {
    await $('button[data-test-id*="compose-send-button"]').click();
  });

  it('should verify that the email has removed from the drafts folder', async function() {
    await expect($('a[aria-label*="From: test1234512345@yopmail.com"]')).toExist();
  });

  it('should verify that the email is in Sent folder', async function() {
    await $('li div[data-test-folder-container*="Draft"]').click();
    await expect($('a[aria-label*="From: test1234512345@yopmail.com"]')).toExist();
  });

  it('should logout from the account', async function() {
  await $('#ybarAccountMenu').moveTo();
  await $('a#profile-signout-link').waitForDisplayed();
  await $('a#profile-signout-link').click();
  });

  it('should verify that the logout was successfull', async function() {
    await expect($('._yb_k2zgk')).toExist();
  });
});
