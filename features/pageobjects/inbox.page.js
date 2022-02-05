const Page = require('./page');
const selectors = {
  composeButton: 'a[href*="/d/compose/"]',
};

class InboxPage extends Page {
  get composeButton() { return $(selectors.composeButton); }
}

module.exports = new InboxPage();
