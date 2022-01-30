const Page = require('./page');

const selectors = {
  emailAddress: '.P_oRhLS',
  subject: 'input[data-test-id*="compose-subject"]',
  body: 'div[dir*="ltr"]',
  sendButton: 'button[data-test-id*="compose-send-button"]'
};

class EditPage extends Page {
  get emailAddress() { return $(selectors.emailAddress); }

  get subject() { return $(selectors.subject); }

  get body() { return $(selectors.body); }

  get sendButton() { return $(selectors.sendButton); }
}

module.exports = new EditPage();