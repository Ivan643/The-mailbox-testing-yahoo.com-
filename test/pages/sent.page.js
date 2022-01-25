/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

const Page = require('./page');

class SentPage extends Page {
  get sentEmail() { return $('a[aria-label*="From: test1234512345@yopmail.com"]'); }

  get profileItem() { return $('#ybarAccountMenu'); }

  get logoutButton() { return $('//*[@id="profile-signout-link"]'); }

  async logout() { await this.logoutButton.waitForDisplayed(); this.logoutButton.click(); }
}

module.exports = new SentPage();