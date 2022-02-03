const Page = require('./page');

const selectors = {
  composeButton: 'a[href*="/d/compose/"]'
};

class InboxPage extends Page {
  get composeButton() { return $(selectors.composeButton); }

  async open() { await super.open('https://mail.yahoo.com/d/folders/1'); }
}

module.exports = new InboxPage();