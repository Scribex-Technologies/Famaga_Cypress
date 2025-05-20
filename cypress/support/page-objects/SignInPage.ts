const SignInElements = {
    email: 'input[name=email]',
    password: 'input[name=password]',
    signInBtn: 'button[type=submit]',
    passwordEyeIcon: 'button[type=button]',
}
class SignInPage {
    navigate() {
        cy.visit('/')
    }
    signIn(email: string, password: string) {
        cy.get(SignInElements.email).type(email)
        cy.get(SignInElements.password).type(password)
        cy.get(SignInElements.signInBtn).click()
    }
    clickSignInBtn() {
        cy.get(SignInElements.signInBtn).click()
    }
    clickSignUpBtn() {
        cy.contains('a', 'Sign Up').click()
    }
    clickEyeIcon() {
        cy.get(SignInElements.passwordEyeIcon).click()
    }
    checkPasswordEye() {
        cy.get(SignInElements.password).should('have.attr', 'type', 'text')
        cy.get(SignInElements.passwordEyeIcon).click()
        cy.get(SignInElements.password).should('have.attr', 'placeholder', '••••••••')
    }
    enterPassword(password: string) {
        cy.get(SignInElements.password).type(password)
    }
    enterEmail(email: string) {
        cy.get(SignInElements.email).type(email)
    }
}
export default SignInPage
