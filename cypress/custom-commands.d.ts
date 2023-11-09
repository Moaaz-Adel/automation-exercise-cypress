declare namespace Cypress {
  interface Chainable {
    registerViaAPI: () => Chainable<any>;
  }
}
