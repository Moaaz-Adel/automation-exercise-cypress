/// <reference types="cypress" />
import { homePage } from "../pages/home-page";
import { loginRegisterPage } from "../pages/login-register-page";
import { accountInfoPage } from "../pages/account-info-page";
import { accountCreatedPage } from "../pages/account-created-page";
import { faker } from "@faker-js/faker";
import { userInfo } from "../../../fixtures/testdata";
import { singInPage } from "../pages/SignInPage";

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

  context("Registration TCs", () => {
    beforeEach("Setup", () => {
      cy.visit("/");
      homePage.Selectors.slider().should("be.visible");
      homePage.navigateToLoginPage();
      loginRegisterPage.Selectors.registerHeader().should("be.visible");
    });
    it.only("register new User", { tags: ["@auth", "@e2e"] }, () => {
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

    it("register user with existing email", { tags: ["@auth", "@e2e"] }, () => {
      cy.registerViaAPI().then(() => {
        loginRegisterPage.registerNewUser(
          // @ts-ignore
          localStorage.getItem("userName"),
          localStorage.getItem("userEmail")
        );
        loginRegisterPage.Selectors.userAlreadyExistValidationTxt().should(
          "be.visible"
        );
      });
    });
  });

  context("Login TCs", { tags: ["@e2e", "@all"] }, () => {
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

    it("login User incorrect username and password", () => {
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

  context("Logout TCs", () => {
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
    it("logout", () => {
      loginRegisterPage.login(
        // @ts-ignore
        localStorage.getItem("userEmail"),
        localStorage.getItem("userPass")
      );
      homePage.Selectors.loggedInUserNameTxt().should(
        "contain.text",
        localStorage.getItem("userName")
      );
      homePage.logout();
      cy.url().should("include", "login");
    });
  });

  it.only("signInTest", () => {
    singInPage.singIn();
  });
});
