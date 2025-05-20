//for future implementation
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const userName = `awesome user-${id}`

const generalTexts = {
    invalidCredentialsMsg: 'Invalid email address or password.',
    invalidEmailMsg: 'Please enter a valid email.',
    emptyEmailMsg: 'Please enter the email.',
    emptyPasswordMsg: 'Please enter the password.',
    accountName: userName,
    accountUpdatedMessage: 'Success! Your account information has been updated.',
    successForgotPasswordMessage: 'We’ve sent a link to <email>, please follow the link to reset your password',
    resetPasswordExpiredScreenMessage: 'The link was already used, please request a new one.',
    mainEmail: 'tatevik@scal.io',
    mainPassword: 'Scalio.55',
}
export default generalTexts
