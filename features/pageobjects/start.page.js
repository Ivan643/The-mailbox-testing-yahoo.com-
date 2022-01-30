const Page = require('./page');

const selectors = {
  loginButton: './/*[@id="ybar-inner-wrap"]/div[3]/div/div[3]/div[1]/div/a',
  searchInput: '//*[@id="ybar-sbq"]',
};

class StartPage extends Page {
  async open() { await super.open('https://www.yahoo.com'); }

  get loginButton() { return $(selectors.loginButton); }

  get searchInput() { return $(selectors.searchInput); }
}

module.exports = new StartPage();
