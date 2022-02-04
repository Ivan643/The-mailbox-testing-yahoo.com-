const Page = require('./page');

const selectors = {
  labelOfProfile: '#ybarAccountMenuOpener',
  mailButton: '#ybarMailLink'
};

class HomePage extends Page {
  get labelOfProfile() { return $(selectors.labelOfProfile); }

  get mailButton() { return $(selectors.mailButton); }
}

module.exports = new HomePage();