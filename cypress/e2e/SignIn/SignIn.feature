Feature: Authentication

 Background:
 Given I open the the Sign in page

  @smoke
  Scenario: The user Signed in successfully with valid credentials
    When I input valid email address and valid password and click on the Sign in button
    Then I see the user signed in successfully

  @regression
  Scenario: The user should not be able to Sign in with valid Email and invalid Password
    When I input valid Email address and invalid Password and click on the Sign in button
    Then I see the validation message displayed under the password field

  @regression
  Scenario: The user isn't Signed in with invalid Email and valid Password
    When I input invalid Email address and valid Password and click on the button Sign in
    Then I see the user is not signed in and the validation message displayed under the email field

  @regression
  Scenario: The user isn't Signed in with valid Email and blank Password field
    When I input valid Email address and leave the password field blank and click on the Sign in button
    Then I see the user is not signed in and the validation message displayed under the password field

  @regression
  Scenario: The user isn't Signed in with valid password and blank Email field
    When I input valid password and leave the Email field blank and click on the Sign in button
    Then I see the validation message displayed under the email field

  @regression
  Scenario: The user isn't Signed in with blank password and Email fields
    When I leave the password and email fields blank and click on the Sign in button
    Then I see the user is not signed in and the validation messages displayed under the email and password fields

  @regression
  Scenario: The show/hide toggle show the password data in the field
    When I click on the show hide icon
    Then I see the password shown or hidden in the password field
 
  @regression
  Scenario: The sign up page opened from the sign in page
    When I click on the sign up button
    Then I see the user redirect to the sign up page