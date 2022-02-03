Feature: Checking the creating of an email

Scenario: 06. As a user, I can create an email
    Given I am on the Compose page as an authorized user
    When I fill the Address field with 'test1234512345@yopmail.com'
    And I fill the Subject field with 'The email testing!'
    And I fill the Body field with 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    And I click the Drafts folder button
    Then I should see the created draft in the Drafts folder