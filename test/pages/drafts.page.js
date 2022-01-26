const Page = require('./page');

const selectors = {
  draftEmail: 'a[aria-label*="From: test1234512345@yopmail.com"]',
  draftEmailList: '//*[@id="mail-app-component"]/div/div/div[2]/div/div/div[2]/div/div[1]/ul/li[2]',
  sentFolderButton: 'li div[data-test-folder-container*="Draft"]'
};

class DraftsPage extends Page {
  get draftEmail() { return $(selectors.draftEmail); }

  get draftEmailList() { return $(selectors.draftEmailList); }

  get sentFolderButton() { return $(selectors.sentFolderButton); }
}

module.exports = new DraftsPage();
