/// <reference types="cypress" />
import { homePage } from "../pages/home-page";
import { contactUsPage } from "../pages/contact-us-page";
import { faker } from "@faker-js/faker";

let name = faker.name.firstName();
let email = faker.internet.email();
let subject = faker.random.words(2);
let message = faker.random.words(6);
describe("Contact Us TCs", () => {
  beforeEach("Setup", () => {
    cy.visit("/");
    homePage.Selectors.slider().should("be.visible");
  });
  it.only("contact Us Form", () => {
    homePage.navigateToContactUsPage();
    contactUsPage.Selectors.contactUsHeaderTxt().should("be.visible");
    contactUsPage.fillFormData(name, email, subject, message);
    contactUsPage.verifySuccessMessage();
    contactUsPage.navigateToHomePage();
    cy.url().should("eq", "https://www.automationexercise.com/");
  });
});
