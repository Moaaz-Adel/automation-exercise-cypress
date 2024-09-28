import { homePage } from "../pages/home-page";
import { loginRegisterPage } from "../pages/login-register-page";
import { accountInfoPage } from "../pages/account-info-page";
import { accountCreatedPage } from "../pages/account-created-page";
import { generateUserData } from "@fixtures/userData";

describe("Auth Tests", { tags: "Regression" }, () => {
  let userData: any;

  context("Registration TCs", () => {
    before(() => {
      userData = generateUserData();
    });

    beforeEach("Setup", () => {
      cy.navigateToLogin();
    });

    it("register new User", { tags: ["@auth", "@e2e"] }, () => {
      loginRegisterPage.registerNewUser(userData.userName, userData.userEmail);
      accountInfoPage.Selectors.accountInfoHeader().should("be.visible");
      accountInfoPage.registerNewUser(
        1,
        "1233254367ADaw@#",
        1,
        1,
        userData.company,
        userData.userName,
        userData.lastName,
        userData.address,
        userData.address2,
        userData.state,
        userData.city,
        userData.zipCode,
        userData.mobileNumber
      );
      accountCreatedPage.Selectors.accountCreatedBackTxt().should(
        "contain.text",
        "Account Created!"
      );
      accountCreatedPage.Selectors.continueBtn().click();
      homePage.Selectors.loggedInUserNameTxt().should(
        "contain.text",
        userData.userName
      );
      cy.deleteAccount();
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
      cy.navigateToLogin();
    });
    it("login User with correct email and password", () => {
      loginRegisterPage.login(
        // @ts-ignore
        localStorage.getItem("userEmail"),
        localStorage.getItem("userPass")
      );
      homePage.Selectors.loggedInUserNameTxt().should(
        "contain.text",
        localStorage.getItem("userName")
      );
      cy.deleteAccount();
    });

    it("login User incorrect username and password", () => {
      loginRegisterPage.login(
        // @ts-ignore
        userData.userEmail,
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
      cy.navigateToLogin();
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
});
