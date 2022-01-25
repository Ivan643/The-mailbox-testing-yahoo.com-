/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

const Page = require('./page');

class StartPage extends Page {
  async open() { super.open('https://www.yahoo.com/'); }

  get loginButton() { return $('.//*[@id="ybar-inner-wrap"]/div[3]/div/div[3]/div[1]/div/a'); }
}

module.exports = new StartPage();
