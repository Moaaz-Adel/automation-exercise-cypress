import { accountEndPoint } from "./../../utils/links";
import { deleteAccountEndPoint } from "./../../utils/links";
import { body } from "../../fixtures/testdata";
describe("Account API Tests", () => {
  before(() => {
    // cy.clearLocalStorageSnapshot();
    cy.saveLocalStorage();
  });
  beforeEach(() => {
    cy.restoreLocalStorage();
  });
  afterEach(() => {
    cy.saveLocalStorage();
  });
  context("Create/Register user account", () => {
    it("create/register new User Account", () => {
      cy.request({
        url: accountEndPoint,
        method: "POST",
        body: Object.fromEntries(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((response) => {
        expect(response.status).to.equal(200); //* This should be 201 instead of 200
        expect(response.body).to.contain("User created!");
      });
    });
  });
});

context("DELETE METHOD To Delete User Account", () => {
  it("delete user Account", () => {
    const userDetails = new URLSearchParams();
    userDetails.append("email", body.get("email"));
    userDetails.append("password", body.get("password"));
    cy.request({
      url: deleteAccountEndPoint,
      method: "DELETE",
      body: Object.fromEntries(userDetails),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then((response) => {
      expect(response.status).to.equal(200); //* This should be 201 instead of 200
      expect(response.body).to.contain("Account deleted!");
    });
  });
});
