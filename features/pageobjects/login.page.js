const Page = require('./page');
const selectors = {
  inputEmailField: '//*[@id="login-username"]',
  nextButton: '#login-signin',
  inputPasswordField: '#login-passwd'
};

class LoginPage extends Page {
  get inputEmailField() { return $(selectors.inputEmailField); }

  get nextButton() { return $(selectors.nextButton); }

  get inputPasswordField() { return $(selectors.inputPasswordField); }
}

module.exports = new LoginPage();