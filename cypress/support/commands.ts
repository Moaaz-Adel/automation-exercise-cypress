/// <reference types="cypress" />
///<reference path="../custom-commands.d.ts" />
import { userInfo } from "../fixtures/testdata";
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

Cypress.Commands.add("registerViaAPI", () => {
  cy.request({
    method: "POST",
    url: "https://automationexercise.com/api/createAccount",
    body: userInfo,
    form: true,
  }).then(() => {
    window.localStorage.setItem("userEmail", userInfo.email);
    window.localStorage.setItem("userPass", userInfo.password);
    window.localStorage.setItem("userName", userInfo.name);
  });
});

// Cypress.Commands.add("selectRandomlyFromDdl", () => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// });
