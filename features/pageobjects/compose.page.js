const Page = require('./page');

const selectors = {
  inputAddressField: '#message-to-field',
  inputSubjectField: 'input[data-test-id*="compose-subject"]',
  inputBodyField: '//*[@id="editor-container"]/div[1]',
  draftsFolderButton: 'li div[data-test-folder-container*="Draft"]'
};

class ComposePage extends Page {
  get inputAddressField() { return $(selectors.inputAddressField); }

  get inputSubjectField() { return $(selectors.inputSubjectField); }

  get inputBodyField() { return $(selectors.inputBodyField); }

  get draftsFolderButton() { return $(selectors.draftsFolderButton); }

  async open() { await super.open('https://mail.yahoo.com/d/compose/'); }
}

module.exports = new ComposePage();