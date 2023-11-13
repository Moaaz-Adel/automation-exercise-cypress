class HomePage {
  Selectors = {
    slider: () => cy.get("#slider"),
    loginRegisterBtn: () => cy.get("a[href*='/login']"),
    loggedInUserNameTxt: () => cy.get(".nav.navbar-nav a > b"),
    deleteAccountBtn: () => cy.contains(" Delete Account"),
    logoutBtn: () => cy.get("[href='/logout']"),
  };

  navigateToLoginPage() {
    this.Selectors.loginRegisterBtn().click();
  }

  logout() {
    this.Selectors.logoutBtn().click();
  }
}

export const homePage = new HomePage();
