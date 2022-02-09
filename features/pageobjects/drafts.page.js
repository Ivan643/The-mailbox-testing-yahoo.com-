const Page = require('./page');
const selectors = {
  draftEmailList: 'ul[aria-label*="Message list"] > li:last-child > a',
  sentFolderButton: 'a[href*="/d/folders/2"]',
};

class DraftsPage extends Page {
  get draftEmailList() { return $(selectors.draftEmailList); }

  get sentFolderButton() { return $(selectors.sentFolderButton); }
}

module.exports = new DraftsPage();