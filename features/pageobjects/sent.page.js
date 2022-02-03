const Page = require('./page');

const selectors = {
  sentEmail: 'a[aria-label*="From: test1234512345@yopmail.com"]',
  profileItem: '#ybarAccountMenu',
  logoutButton: '//*[@id="profile-signout-link"]',
  actualEmailOfReceiver: '//*[@id="mail-app-component"]/div/div[2]/div[4]/ul/li/div/div[1]/header/div[2]/div[2]/span[2]/span/span',
};

class SentPage extends Page {
  get sentEmail() { return $(selectors.sentEmail); }

  get profileItem() { return $(selectors.profileItem); }

  get logoutButton() { return $(selectors.logoutButton); }

  get actualEmailOfReceiver() {return $(selectors.actualEmailOfReceiver); }
}

module.exports = new SentPage();