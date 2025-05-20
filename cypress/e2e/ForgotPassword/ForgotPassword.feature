Feature: Forgot Password

    @smoke
    Scenario: Check the user with valid email address can request forgot password successfully
        Given I open the Sign in page and click on the Forgot password link
        When I add a valid/existing email on the Forgot password screen and click on the Remind me button
        Then I see the request successfully sent to the user's email and the user is redirected to the screen with the following <message>

    @smoke
    Scenario: Chek the user with non existing email address can recuest "Forgot password" successfully
        Given I open the Sign in page and click on the Forgot password link
        When I add a valid/existing email on the Forgot password screen and click on the Remind me button
        Then I see the request successfully sent to the user's email and the user is redirected to the screen with the following <message>

    @smoke
    Scenario: Check the "Forgot password" request isn't send when entering invalid email address
        Given I open the Sign in page and click on the Forgot password link
        When I add a invalid email in the email field and click on the Remind me button
        Then I see the validation <message> displays under the email field

    @regression
    Scenario: Try to submit a blank email on the forgot password page
        Given I open the Sign in page and click on the Forgot password link
        When I leave the email field blank and click on the "Remind me" button
        Then I see the validation <message> displays under the email field

    @smoke
    Scenario: The user redirects to the Sign in ppage when clicks on the Back button on the Forgot password page
        Given I open the Sign in page and click on the Forgot password link
        When I click on the Back button
        Then I see the user redirects to the Sign in page


    @regression
    Scenario: The new Reset password link is sent to the user's email when clicking on the Resend link button on the invalid link screen
        Given I open the expired Reset password link after 24 hours and click on the Resend link button
        Then I see the new Reset password link sent to the user's email successfully and the screen has been opened with the following <message>

    @regression
    Scenario: The Link expired screen opened when trying to use the used Reset password link again
        Given I ope used the used Reset password link again
        Then I see the Link expired screen opened with the following <message> and with the Resend link button