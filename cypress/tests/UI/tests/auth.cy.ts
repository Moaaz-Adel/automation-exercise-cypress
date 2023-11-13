/// <reference types="cypress" />
// @ts-ignore
import { homePage } from "../pages/home-page";
import { loginRegisterPage } from "../pages/login-register-page";
import { accountInfoPage } from "../pages/account-info-page";
import { accountCreatedPage } from "../pages/account-created-page";
import { faker } from "@faker-js/faker";
import { userInfo } from "../../../fixtures/testdata";

describe("Auth Tests", { tags: "@all" }, () => {
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
  context("Register with new user", () => {
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
      homePage.Selectors.loggedInUserNameTxt().should("contain.text", userName);
      homePage.Selectors.deleteAccountBtn().click();
      accountCreatedPage.Selectors.accountDeletedBackTxt().should(
        "contain.text",
        "Account Deleted!"
      );
    });
  });

  context("Login ", { tags: ["@e2e", "@all"] }, () => {
    before("Prepare user for login", () => {
      cy.registerViaAPI().then((resp) => {
        expect(JSON.parse(resp.body)).to.have.property(
          "message",
          "User created!"
        );
      });
    });

    beforeEach("Setup", () => {
      cy.visit("/");
      homePage.Selectors.slider().should("be.visible");
      homePage.navigateToLoginPage();
      loginRegisterPage.Selectors.registerHeader().should("be.visible");
    });
    it("login User with correct email and password", () => {
      console.log("Register");
      console.log(userInfo.email);
      loginRegisterPage.login(
        // @ts-ignore
        localStorage.getItem("userEmail"),
        localStorage.getItem("userPass")
      );
      homePage.Selectors.loggedInUserNameTxt().should(
        "contain.text",
        localStorage.getItem("userName")
      );
      homePage.Selectors.deleteAccountBtn().click();
      accountCreatedPage.Selectors.accountDeletedBackTxt().should(
        "contain.text",
        "Account Deleted!"
      );
    });

    it.only("login User incorrect username and password", () => {
      loginRegisterPage.login(
        // @ts-ignore
        userEmail,
        "InvalidPass"
      );
      loginRegisterPage.Selectors.invalidUserNamePasswordFeedbackTxt().should(
        "be.visible"
      );
    });
  });
});
