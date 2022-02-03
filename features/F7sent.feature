Feature: Checking logout from the account

Scenario: 09. As a user, I can verify that the sent email is in Sent folder
  Given I am on the Drafts page as an authorized user
  When I click the Sent folder button
  Then I should see the sent email in the Sent folder

Scenario: 10. As a user, I can verify email matches pattern on the page
  When I open the sent email
  Then I expect email matches pattern "^([a-z0-9_-])+\@[a-z0-9_-]+\.[a-z]{2,6}$" on page

Scenario: 11. As a user, I can logout from the mailbox account
  When I hover on the profile icon
  And I click the Sign Out button
  Then I should see the Start page