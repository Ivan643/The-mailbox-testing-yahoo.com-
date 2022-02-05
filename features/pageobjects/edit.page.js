const Page = require('./page');
const selectors = {
  emailAddress: 'div[data-test-id*="pill-text"]',
  subject: 'input[data-test-id*="compose-subject"]',
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