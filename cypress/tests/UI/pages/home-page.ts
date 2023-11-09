class HomePage {
  Selectors = {
    slider: () => cy.get("#slider"),
    loginRegisterBtn: () => cy.get("a[href*='/login']"),
    loggedInUserNameTxt: () => cy.get(".nav.navbar-nav a > b"),
    deleteAccountBtn: () => cy.contains(" Delete Account"),
  };

  navigateToLoginPage() {
    this.Selectors.loginRegisterBtn().click();
  }
}

export const homePage = new HomePage();
