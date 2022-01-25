/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

const Page = require('./page');

class DraftsPage extends Page {
  get draftEmail() { return $('a[aria-label*="From: test1234512345@yopmail.com"]'); }

  get draftEmailList() { return $('//*[@id="mail-app-component"]/div/div/div[2]/div/div/div[2]/div/div[1]/ul/li[2]'); }

  get sentFolderButton() { return $('li div[data-test-folder-container*="Draft"]'); }
}

module.exports = new DraftsPage();