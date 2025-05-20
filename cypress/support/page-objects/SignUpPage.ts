const SignUpElements = {
    email: '#email',
    password: '#password',
    signUpButton: '#sign-up-button',
}
class SignUpPage {
    navigate() {
        cy.visit('/sign-up')
    }
    signUpPageOpened() {
        cy.url().should('include', '/sign-up')
    }
    signUpUser(email: string, password: string) {
        cy.get(SignUpElements.email).type(email)
        cy.get(SignUpElements.password).type(password)
    }
}
export default SignUpPage
