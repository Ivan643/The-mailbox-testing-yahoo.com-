/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

const Page = require('./page');

class HomePage extends Page {
  get labelOfProfile() { return $('#ybarAccountMenuOpener'); }

  get mailButton() { return $('#ybarMailLink'); }
}

module.exports = new HomePage();