Feature: Cheking the SignIn button
    
  Scenario: 01. As a user, I can open the Login page of the website
    Given I am on the Start page as an unuthorized user
    When I click the Sign In button
    Then I should see a Login page
