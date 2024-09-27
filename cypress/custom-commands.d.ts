declare namespace Cypress {
  interface Chainable {
    registerViaAPI: () => Chainable<any>;
    navigateToLogin: () => Chainable<any>;
    deleteAccount: () => Chainable<any>;
    navigateToHome: () => Chainable<any>;
  }
}
