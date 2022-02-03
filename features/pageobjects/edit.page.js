const Page = require('./page');

const selectors = {
  emailAddress: '//*[@id="mail-app-component"]/div/div/div[1]/div[2]/div/div/div/div[2]/div/ul/li[1]/span/span/span/div/div/div[2]',
  subject: '//*[@id="mail-app-component"]/div/div/div[1]/div[3]/div/div/input',
  body: '//*[@id="editor-container"]/div[1]/div/div',
  sendButton: 'button[data-test-id*="compose-send-button"]'
};

class EditPage extends Page {
  get emailAddress() { return $(selectors.emailAddress); }

  get subject() { return $(selectors.subject); }

  get body() { return $(selectors.body); }

  get sendButton() { return $(selectors.sendButton); }
}

module.exports = new EditPage();