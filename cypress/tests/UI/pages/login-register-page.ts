class LoginRegisterPage {
  Selectors = {
    loginHeader: () => cy.contains("h2", "Login to your account"),
    registerHeader: () => cy.contains("h2", "New User Signup!"),
    userNameTxt: () => cy.get("[data-qa='signup-name']"),
    userEmailTxt: () => cy.get("[data-qa='signup-email']"),
    signUpBtn: () => cy.get("[data-qa='signup-button']"),
    emailAddressTxt: () => cy.get("[data-qa='login-email']"),
    passwordTxt: () => cy.get("[data-qa='login-password']"),
    loginBtn: () => cy.get("[data-qa='login-button']"),
    invalidUserNamePasswordFeedbackTxt: () =>
      cy.contains("p", "Your email or password is incorrect!"),
    userAlreadyExistValidationTxt: () =>
      cy.contains("p", "Email Address already exist!"),
  };

  registerNewUser(userName: string, emailAddress: string) {
    this.Selectors.userNameTxt().type(userName);
    this.Selectors.userEmailTxt().type(emailAddress);
    this.Selectors.signUpBtn().click();
  }

  login(emailAddress: string, password: string) {
    this.Selectors.emailAddressTxt().type(emailAddress);
    this.Selectors.passwordTxt().type(password);
    this.Selectors.loginBtn().click();
  }
}

export const loginRegisterPage = new LoginRegisterPage();
