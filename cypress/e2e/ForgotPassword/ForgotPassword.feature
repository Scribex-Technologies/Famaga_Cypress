Feature: Forgot Password

 Background:
 Given I open the Sign in page
 
    @smoke
    Scenario: Check the user with valid email address can request forgot password successfully
        When I add an existing email on the screen and click the button
        Then I see the request successfully sent to the user's email and the user is redirected to the successful screen
    @skip 
    @smoke 
    Scenario: Check the user with non existing email address can request "Forgot password" successfully
        When I open the Forgot password screen, add non existing email and click on the button
        Then I see the request successfully sent

    @smoke
    Scenario: Check the "Forgot password" request isn't send when entering invalid email address
        When I open the Forgot password screen, add an invalid email and click on the button
        Then I see the invalid email validation message displays under the email field

    @regression
    Scenario: Try to submit a blank email on the forgot password page
        When I open the Forgot password screen, leave the email empty and click on the button
        Then I see the validation empty email validation message displays under the email field

    @regression
    Scenario: The Link expired screen opened when trying to use expired Reset password link
        When I expired Reset password link
        Then I see the Link expired screen opened
