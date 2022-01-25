/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

const Page = require('./page');

class LoginPage extends Page {
  get inputEmailField() { return $('//*[@id="login-username"]'); }

  get nextButton() { return $('#login-signin'); }

  get inputPasswordField() { return $('#login-passwd'); }
}

module.exports = new LoginPage();