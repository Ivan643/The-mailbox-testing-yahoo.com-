/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

const Page = require('./page');

class InboxPage extends Page {
  get composeButton() { return $('a[href*="/d/compose/"]'); }
}

module.exports = new InboxPage();