const Page = require('./page');

const selectors = {
  draftEmail: '//*[@id="mail-app-component"]/div/div/div[2]/div/div/div[2]/div/div[1]/ul/li[2]/a',
  draftEmailList: '//*[@id="mail-app-component"]/div/div/div[2]/div/div/div[2]/div/div[1]/ul/li[2]',
  sentFolderButton: '//*[@id="app"]/div[2]/div/div[1]/nav/div/div[3]/div[1]/ul/li[5]',
  emptyDraftFolder: '//*[@id="mail-app-component"]/div/div/div[2]/div[1]',
};

class DraftsPage extends Page {
  get draftEmail() { return $(selectors.draftEmail); }

  get draftEmailList() { return $(selectors.draftEmailList); }

  get sentFolderButton() { return $(selectors.sentFolderButton); }

  get emptyDraftFolder() { return $(selectors.emptyDraftFolder); }
}

module.exports = new DraftsPage();
