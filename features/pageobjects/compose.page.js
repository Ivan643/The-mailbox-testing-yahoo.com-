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

  async createEmail() {
    expect(await this.inputAddressField).toExist();
    expect(await this.inputSubjectField).toExist();
    expect(await this.inputBodyField).toExist();
    await this.inputAddressField.setValue('test1234512345@yopmail.com');
    expect(await this.inputAddressField).toHaveText('test1234512345@yopmail.com');
    await this.inputSubjectField.setValue('The email testing!');
    expect(await this.inputSubjectField).toHaveText('The email testing!');
    await this.inputBodyField.setValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    expect(await this.inputBodyField).toHaveText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    }
}

module.exports = new ComposePage();