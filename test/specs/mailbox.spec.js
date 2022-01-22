describe('Verify main functionality of the mailbox', () => {
  const addressText = 'test1234512345@yopmail.com';
  const subjectText = 'The email testing!';
  const bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.';

  it('should login to the mailbox', async () => {
    await browser.url('https://www.yahoo.com/');
    const loginButton = await $('.//*[@id="ybar-inner-wrap"]/div[3]/div/div[3]/div[1]/div/a');
    await loginButton.click();
    const inputEmailField = await $('#login-username');
    await inputEmailField.click();
    await browser.keys('testmailbox123123@yahoo.com');
    const nextButton = await $('#login-signin');
    await nextButton.click();
    const inputPasswordField = $('#login-passwd');
    await inputPasswordField.click();
    await browser.keys('automatedTestingIsAwesome');
    await nextButton.click();
  });

  it('should verify that the login was successfull', async () => {
    const labelOfProfile = await $('#ybarAccountMenuOpener');
    await expect(labelOfProfile).toExist();
  });

  it('should create a new email and should save it to the drafts folder', async () => {
    const mailButton = await $('#ybarMailLink');
    await mailButton.click();
    const composeButton = await $('a[href*="/d/compose/"]');
    await composeButton.click();
    const inputAddressField = await $('#message-to-field');
    await inputAddressField.click();
    await browser.keys(addressText);
    const inputSubjectField = await $('input[data-test-id*="compose-subject"]');
    await inputSubjectField.click();
    await browser.keys(subjectText);
    const inputBodyField = await $('#editor-container');
    await inputBodyField.click();
    await browser.keys(bodyText);
    const draftsFolderButton = await $('li div[data-test-folder-container*="Draft"]');
    await draftsFolderButton.click();
  });

  it('should verify that the email presents in the drafts folder', async () => {
    const draftEmail = await $('a[aria-label*="From: test1234512345@yopmail.com"]');
    await expect(draftEmail).toExist();
  });

  it('should verify the draft content', async () => {
    const draftEmailList = await $('li a[aria-label*="From: test1234512345@yopmail.com"]');
    await draftEmailList.click();
    const emailAddress = await $('.P_oRhLS');
    await expect(emailAddress).toHaveTextContaining(addressText);
    const subject = await $('input[data-test-id*="compose-subject"]');
    await expect(subject).toHaveValueContaining(subjectText);
    const body = await $('div[dir*="ltr"]');
    await expect(body).toHaveTextContaining(bodyText);
  });

  it('should send the email', async () => {
    const sendButton = await $('button[data-test-id*="compose-send-button"]');
    await sendButton.click();
  });

  it('should verify that the email has removed from the drafts folder', async () => {
    const draftEmail = await $('a[aria-label*="From: test1234512345@yopmail.com"]');
    await expect(draftEmail).toExist();
  });

  it('should verify that the email is in Sent folder', async () => {
    const sentFolderButton = await $('li div[data-test-folder-container*="Draft"]');
    await sentFolderButton.click();
    const sentEmail = await $('a[aria-label*="From: test1234512345@yopmail.com"]');
    await expect(sentEmail).toExist();
  });

  it('should logout from the account', async () => {
    const profileItem = await $('#ybarAccountMenu');
    await profileItem.moveTo();
    const logoutButton = await $('//*[@id="profile-signout-link"]');
    await logoutButton.waitForDisplayed();
    await logoutButton.click();
  });

  it('should verify that the logout was successfull', async () => {
    const loginButton = await $('//*[@id="ybar-inner-wrap"]/div[3]/div/div[3]/div[1]/div/a');
    await expect(loginButton).toExist();
  });
});
