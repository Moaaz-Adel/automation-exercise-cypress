class HomePage {
  Selectors = {
    slider: () => cy.get("#slider"),
    loginRegisterBtn: () => cy.get("a[href*='/login']"),
    loggedInUserNameTxt: (userName) => cy.contains("b", userName),
    deleteAccountBtn: () => cy.contains(" Delete Account"),
  };

  navigateToLoginPage() {
    this.Selectors.loginRegisterBtn().click();
  }
}

export const homePage = new HomePage();
