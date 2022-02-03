const Page = require('./page');

const selectors = {
  loginButton: './/*[@id="ybar-inner-wrap"]/div[3]/div/div[3]/div[1]/div/a',
};

class StartPage extends Page {
  async open() { await super.open('https://www.yahoo.com'); }

  get loginButton() { return $(selectors.loginButton); }
}

module.exports = new StartPage();
