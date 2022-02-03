Feature: Checking the Mail button

Scenario: 04. As a user, I can go to the Inbox page
    Given I am on the Home page as an authorized user
    When I click the Mail button
    Then I should see an Inbox page with Compose button