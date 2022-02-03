const Page = require('./page');

const expectChai = require('chai').expect;

const selectors = {
  inputEmailField: '//*[@id="login-username"]',
  nextButton: '#login-signin',
  inputPasswordField: '#login-passwd'
};

const cookies = browser.getCookies();

class LoginPage extends Page {
  get inputEmailField() { return $(selectors.inputEmailField); }

  get nextButton() { return $(selectors.nextButton); }

  get inputPasswordField() { return $(selectors.inputPasswordField); }

  async open() { await super.open('https://login.yahoo.com'); }

  async login() {
    await this.inputEmailField.setValue('testmailbox123123@yahoo.com');
    await this.nextButton.click();
    await this.inputPasswordField.setValue('automatedTestingIsAwesome');
    await this.nextButton.click();
  }
}

module.exports = new LoginPage();