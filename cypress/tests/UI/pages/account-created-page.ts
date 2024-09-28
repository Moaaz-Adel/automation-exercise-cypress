class AccountCreatedPage {
  Selectors = {
    accountCreatedBackTxt: () => cy.get("b"),
    accountDeletedBackTxt: () => cy.get("b"),
    continueBtn: () => cy.get("[data-qa='continue-button']"),
  };
}

export const accountCreatedPage = new AccountCreatedPage();
