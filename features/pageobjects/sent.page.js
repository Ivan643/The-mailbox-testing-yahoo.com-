const Page = require('./page');

const selectors = {
  sentEmail: 'a[aria-label*="From: test1234512345@yopmail.com"]',
  profileItem: '#ybarAccountMenu',
  logoutButton: '//*[@id="profile-signout-link"]',
  actualEmailOfReceiver: 'span[data-test-id*="message-to"]',
};

class SentPage extends Page {
  get sentEmail() { return $(selectors.sentEmail); }

  get profileItem() { return $(selectors.profileItem); }

  get logoutButton() { return $(selectors.logoutButton); }

  get actualEmailOfReceiver() {return $(selectors.actualEmailOfReceiver); }
}

module.exports = new SentPage();