Feature: Checking the Compose button

Scenario: 05. As a user, I can go to the Compose page
    Given I am on the Inbox page as an authorized user
    When I click the Compose button
    Then I should see a Compose page with Address, Subject and Body fields