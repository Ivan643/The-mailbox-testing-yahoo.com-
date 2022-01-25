/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

const Page = require('./page');

class EditPage extends Page {
  get emailAddress() { return $('.P_oRhLS'); }

  get subject() { return $('input[data-test-id*="compose-subject"]'); }

  get body() { return $('div[dir*="ltr"]'); }

  get sendButton() { return $('button[data-test-id*="compose-send-button"]'); }
}

module.exports = new EditPage();