class AccountCreatedPage {
  Selectors = {
    accountCreatedBackTxt: () => cy.get("b"),
    accountDeletedBackTxt: () => cy.get("b"),
    continueBtn: () => cy.get("[data-qa='continue-button']"),
  };

  navigateToLoginPage() {
    this.Selectors.createAccountFeedBackTxt().click();
  }
}

export const accountCreatedPage = new AccountCreatedPage();
