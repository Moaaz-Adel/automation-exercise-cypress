import { homePage } from "../pages/home-page";
import { loginRegisterPage } from "../pages/login-register-page";
import { accountInfoPage } from "../pages/account-info-page";
import { accountCreatedPage } from "../pages/account-created-page";
import { faker } from "@faker-js/faker";

describe("Auth Tests", () => {
  let userName = faker.name.firstName();
  let lastName = faker.name.lastName();
  let address = faker.address.streetAddress();
  let address2 = faker.address.state();
  let state = faker.address.streetName();
  let city = faker.address.city();
  let mobileNumber = faker.phone.phoneNumber();
  let zipCode = faker.address.zipCode();
  let userEmail = faker.internet.email();
  let company = faker.random.words(2);
  it("test case 1: Register User", { tags: ["@auth", "@e2e"] }, () => {
    cy.visit("/");
    homePage.Selectors.slider().should("be.visible");
    homePage.navigateToLoginPage();
    loginRegisterPage.Selectors.registerHeader().should("be.visible");
    loginRegisterPage.registerNewUser(userName, userEmail);
    accountInfoPage.Selectors.accountInfoHeader().should("be.visible");
    accountInfoPage.registerNewUser(
      1,
      "1233254367ADaw@#",
      1,
      1,
      company,
      userName,
      lastName,
      address,
      address2,
      state,
      city,
      zipCode,
      mobileNumber
    );
    accountCreatedPage.Selectors.accountCreatedBackTxt().should(
      "contain.text",
      "Account Created!"
    );
    accountCreatedPage.Selectors.continueBtn().click();
    homePage.Selectors.loggedInUserNameTxt(userName).should(
      "contain.text",
      userName
    );
    homePage.Selectors.deleteAccountBtn().click();
    accountCreatedPage.Selectors.accountDeletedBackTxt().should(
      "contain.text",
      "Account Deleted!"
    );
  });

  it.only("should register", () => {
    cy.registerViaAPI();
  });
});
