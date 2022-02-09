Feature: The mailbox yahoo.com testing
    
Scenario: 01. As a user, I can open the Login page of the website
    Given I am on the Start page as an unuthorized user
    When I click the Sign In button
    Then I should see a Login page

Scenario: 02. As a user, I can enter the mailbox name
    When I enter the mailbox name 'testmailbox123123@yahoo.com'
    Then I should see a Login page with a password field

Scenario: 03. As a user, I can enter the password
    When I enter the password 'automatedTestingIsAwesome'
    Then I should see a Home page

Scenario: 04. As a user, I can go to the Inbox page
    When I click the Mail button
    Then I should see an Inbox page with Compose button

Scenario: 05. As a user, I can go to the Compose page
    When I click the Compose button
    Then I should see a Compose page with Address, Subject and Body fields

Scenario: 06. As a user, I can create an email
    When I fill the Address field with 'test1234512345@yopmail.com'
    And I fill the Subject field with 'The email testing!'
    And I fill the Body field with 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    And I click the Drafts folder button
    Then I should see the created draft in the Drafts folder

Scenario: 07. As a user, I can open the created draft and verify its content
    When I open the created draft
    Then I should verify that the Email Address is actually 'test1234512345@yopmail.com'
    And I should verify that the Subject is actually 'The email testing!'
    And I should verify that the Body is actually 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

Scenario: 08. As a user, I can send the created draft
    When I click the Send button
    Then I should see that the draft has removed from the Drafts folder

Scenario: 09. As a user, I can verify that the sent email is in Sent folder
    When I click the Sent folder button
    Then I should see the sent email in the Sent folder

Scenario: 10. As a user, I can verify email matches pattern on the page
    When I open the sent email
    Then I expect email matches pattern "^([A-Za-z0-9_-])+\@[A-Za-z0-9_-]+\.[A-Za-z]{2,6}$" on page

Scenario: 11. As a user, I can delete the sent email
    When I click the Delete button
    Then I should see the informational message about the successful mail deleting

Scenario: 12. As a user, I can logout from the mailbox account
    When I hover on the profile icon
    And I click the Sign Out button
    Then I should see the Start page
