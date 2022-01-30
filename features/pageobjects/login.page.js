const Page = require('./page');

const expectChai = require('chai').expect;

const selectors = {
  inputEmailField: '//*[@id="login-username"]',
  nextButton: '#login-signin',
  inputPasswordField: '#login-passwd'
};

class LoginPage extends Page {
  get inputEmailField() { return $(selectors.inputEmailField); }

  get nextButton() { return $(selectors.nextButton); }

  get inputPasswordField() { return $(selectors.inputPasswordField); }

  async login() {
    await this.inputEmailField.setValue('testmailbox123123@yahoo.com');
    expectChai(await this.inputEmailField.getValue()).to.be.equal('testmailbox123123@yahoo.com');
    await this.nextButton.click();
    expect(await this.inputPasswordField).toExist();
    await this.inputPasswordField.setValue('automatedTestingIsAwesome');
    expectChai(await this.inputPasswordField.getValue()).to.be.equal('automatedTestingIsAwesome');
    await this.nextButton.click();
  }
}

module.exports = new LoginPage();