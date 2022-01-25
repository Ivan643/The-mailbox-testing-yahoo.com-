/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

const Page = require('./page');

class ComposePage extends Page {
  get inputAddressField() { return $('#message-to-field'); }

  get inputSubjectField() { return $('input[data-test-id*="compose-subject"]'); }

  get inputBodyField() { return $('//*[@id="editor-container"]/div[1]'); }

  get draftsFolderButton() { return $('li div[data-test-folder-container*="Draft"]'); }
}

module.exports = new ComposePage();