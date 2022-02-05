const Page = require('./page');
const selectors = {
  sentEmail: 'ul[aria-label*="Message list"] > li:last-child > a',
  profileItem: '#ybarAccountMenu',
  logoutButton: '//*[@id="profile-signout-link"]',
  actualEmailOfReceiver: 'span[data-test-id*="message-to"]',
  deleteButton: 'button[data-test-id*="toolbar-delete"]',
  messageDelete: '#app > div:nth-child(7) > div > div > div',
};

class SentPage extends Page {
  get sentEmail() { return $(selectors.sentEmail); }

  get profileItem() { return $(selectors.profileItem); }

  get logoutButton() { return $(selectors.logoutButton); }

  get actualEmailOfReceiver() {return $(selectors.actualEmailOfReceiver); }

  get deleteButton() {return $(selectors.deleteButton); }
  
  get messageDelete() {return $(selectors.messageDelete); }
}

module.exports = new SentPage();