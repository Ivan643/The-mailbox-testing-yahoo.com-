import Page from './page';

class mailboxPage extends Page {
    
    get loginButton() { return $('.//*[@id="ybar-inner-wrap"]/div[3]/div/div[3]/div[1]/div/a');};
    get inputEmailField() {return $('#login-username');};
    get nextButton() {return $('#login-signin');};
    get inputPasswordField() {return $('#login-passwd');};
    get labelOfProfile() {return $('#ybarAccountMenuOpener');};
    get mailButton() {return $('#ybarMailLink');};
    get composeButton() {return $('a[href*="/d/compose/"]');};
    get inputAddressField() {return $('#message-to-field');};
    get inputSubjectField() {return $('input[data-test-id*="compose-subject"]');};
    get inputBodyField() {return $('#editor-container');};
    get draftsFolderButton() {return $('li div[data-test-folder-container*="Draft"]');};
    get draftEmail() {return $('a[aria-label*="From: test1234512345@yopmail.com"]');};
    get draftEmailList() {return $('li a[aria-label*="From: test1234512345@yopmail.com"]');};
    get emailAddress() {return $('.P_oRhLS');};
    get subject() {return $('input[data-test-id*="compose-subject"]');};
    get body() {return $('div[dir*="ltr"]');};
    get sendButton() {return $('button[data-test-id*="compose-send-button"]');};
    get draftEmail() {return $('a[aria-label*="From: test1234512345@yopmail.com"]');};
    get sentFolderButton() {return $('li div[data-test-folder-container*="Draft"]');};
    get sentEmail() {return $('a[aria-label*="From: test1234512345@yopmail.com"]');};
    get profileItem() {return $('#ybarAccountMenu');};
    get logoutButton() {return $('//*[@id="profile-signout-link"]');};
    open() {super.open('https://www.yahoo.com/');};
    signIn() {this.loginButton.click();};
    enterUsername() {this.inputEmailField.addValue('testmailbox123123@yahoo.com');};
    next() {this.nextButton.click();};
    enterPassword() {this.inputPasswordField.addValue('automatedTestingIsAwesome');};
    mail() {this.mailButton.click();};
    compose() {this.composeButton.click();};
    enterAddress() {this.inputAddressField.addValue('test1234512345@yopmail.com');};
    enterSubject() {this.inputSubjectField.addValue('The email testing!');};
    enterBody() {this.inputBodyField.addValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');};
    saveInDrafts() {this.draftsFolderButton.click();};
    openDraft() {this.draftEmail.click();};
    send() {this.sendButton.click();}
    openSentFolder() {this.sentFolderButton.click();};
    openProfileItem() {this.profileItem.moveTo();};
    logout() {this.logoutButton.waitForDisplayed(); this.logoutButton.click();};
};

export default new mailboxPage();