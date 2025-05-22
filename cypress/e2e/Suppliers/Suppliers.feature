Feature: Suppliers Page

 Background:
 Given I open the Sign in page and signing in
    @skip
    @smoke
    Scenario: Add a new Supplier to the page
        When I fill in all fields and submit
        Then I see the Supplier successfully added

    @smoke
    Scenario: Add a new Contact Person to the Supplier
        When I fill in all contact person's fields and submit
        Then I see the contact person successfully added

    @smoke
    Scenario: Edit Contact Person of the Supplier
        When I edit the contact person's fields and submit
        Then I see the contact person successfully updated

    @smoke
    Scenario: Delete contact contact person of the Supplier
        When I delete the contact person
        Then I see the contact person successfully deleted