Feature: Checking the draft's content

Scenario: 07. As a user, I can open the created draft and verify its content
  Given I am on the Drafts page as an authorized user
  When I click on the created draft
  Then I should verify its content

Scenario: 08. As a user, I can send the created draft
  When I click the Send button
  Then I should see that the draft has removed from the Drafts folder