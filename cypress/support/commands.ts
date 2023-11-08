/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

const userInfo = {
  title: "mr",
  name: "Helllo",
  email: "mr@dwa.wadw",
  password: "adwd@dwadaw.adwa",
  birth_date: "10",
  birth_month: "11",
  birth_year: "2008",
  newsletter: 1,
  optin: 1,
  firstname: "mr",
  lastname: "mr",
  company: "mr",
  address1: "mr",
  address2: "mr",
  country: "india",
  state: "mr",
  city: "mr",
  zipcode: "mr",
  mobile_number: "mr",
};

Cypress.Commands.add("registerViaAPI", (min, max) => {
  cy.request({
    method: "POST",
    url: "https://automationexercise.com/api/createAccount",
    body: userInfo,
    form: true,
  });
});

Cypress.Commands.add("selectRandomlyFromDdl", () => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
});
