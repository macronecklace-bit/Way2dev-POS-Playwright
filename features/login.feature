@smoke
Feature: Way2dev POS login

  As a registered Way2dev POS user
  I want to log in to the application
  So that I can access the products page and validate pages

  Scenario: Validating Home Page
    Given I navigate to the Way2dev POS login page
    Then I verify home page texts

  Scenario: Successful login with valid credentials / Owner Login
    Given I navigate to the Way2dev POS login page
    When I log in with username "admin@test.com" and password "Test123456"
    Then I should see the products page
    Then I should be able to logout successfully

Scenario: Successful login with valid credentials / Staff Login
    Given I navigate to the Way2dev POS login page
    When I log in with username "anu@test.com" and password "Test123456"
    Then I should see the products page
    Then I should be able to logout successfully