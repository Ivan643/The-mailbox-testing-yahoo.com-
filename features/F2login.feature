Feature: Cheking the login to the mailbox account

Scenario: 02. As a user, I can enter the mailbox name
  Given I am on the Login page
  When I enter the mailbox name 'testmailbox123123@yahoo.com'
  Then I should see a Login page with a password field

Scenario: 03. As a user, I can enter the password
  When I enter the password 'automatedTestingIsAwesome'
  Then I should see a Home page