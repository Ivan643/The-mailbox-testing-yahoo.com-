const Page = require('./page');

const selectors = {
  sentEmail: 'a[aria-label*="From: test1234512345@yopmail.com"]',
  profileItem: '#ybarAccountMenu',
  logoutButton: '//*[@id="profile-signout-link"]'
};

class SentPage extends Page {
  get sentEmail() { return $(selectors.sentEmail); }

  get profileItem() { return $(selectors.profileItem); }

  get logoutButton() { return $(selectors.logoutButton); }

  async logout() { await this.logoutButton.waitForDisplayed(); this.logoutButton.click(); }
}

module.exports = new SentPage();
