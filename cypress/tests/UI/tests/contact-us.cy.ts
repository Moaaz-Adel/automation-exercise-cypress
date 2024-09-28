import { homePage } from "../pages/home-page";
import { contactUsPage } from "../pages/contact-us-page";
import { generateContactUsData } from "@fixtures/userData";

let contactUsData: any;
describe("Contact Us TCs", { tags: ["@Regression"] }, () => {
  before(() => {
    contactUsData = generateContactUsData(); //generatedData
  });
  beforeEach("Setup", () => {
    cy.navigateToHome(); // Custom command for visiting the homepage
  });
  it("contact Us Form", () => {
    homePage.navigateToContactUsPage();
    contactUsPage.Selectors.contactUsHeaderTxt().should("be.visible");
    contactUsPage.fillFormData(
      contactUsData.name,
      contactUsData.email,
      contactUsData.subject,
      contactUsData.message
    );
    contactUsPage.verifySuccessMessage();
    cy.navigateToHome();
    cy.url().should("eq", "https://www.automationexercise.com/");
  });
});
