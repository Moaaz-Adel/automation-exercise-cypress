class LoginRegisterPage {
  Selectors = {
    loginHeader: () => cy.contains("h2", "Login to your account"),
    registerHeader: () => cy.contains("h2", "New User Signup!"),
    userNameTxt: () => cy.get("[data-qa='signup-name']"),
    userEmailTxt: () => cy.get("[data-qa='signup-email']"),
    signUpBtn: () => cy.get("[data-qa='signup-button']"),
  };

  registerNewUser(userName: String, emailAddress: String) {
    this.Selectors.userNameTxt().type(userName);
    this.Selectors.userEmailTxt().type(emailAddress);
    this.Selectors.signUpBtn().click();
  }
}

export const loginRegisterPage = new LoginRegisterPage();
