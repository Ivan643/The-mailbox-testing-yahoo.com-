Feature: The mailbox yahoo.com website testing
    
  Scenario: As a user, I can open the Login page of the website
    Given I am on the Start page
    When I click the SignIn button
    Then I should see a Login page

  Scenario: As a user, I can login to the mailbox account
    Given I am on the Login page
    When I login to the mailbox account
    Then I should see a Home page

  Scenario: As a user, I can create an email and save it as a draft
    Given I am on the Home page
    When I create the email and save it as a draft
    Then I should see this email in the Drafts folder

  Scenario: As a user, I can verify the content of the created draft
    Given I am on the Drafts page
    When I open the created draft
    Then I should verify its content

  Scenario: As a user, I can send the draft email and verify that it disappears from the Drafts folder
    Given I am on the Edit page of the draft 
    When I send the draft email
    Then I should verify that draft email removed from the Draft folder

  Scenario: As a user, I can verify that the sent email is in Sent folder
    Given I am in the Drafts folder
    When I open the Sent folder
    Then I should see the sent email

  Scenario: As a user, I can logout from the mailbox account
    Given I am in the Sent folder
    When I logout from the mailbox account
    Then I should see the Start page