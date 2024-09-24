import { accountEndPoint } from "../../utils/links";
import {
  deleteAccountEndPoint,
  updateAccountEndPoint,
  getUserDetailByEmailEndPoint,
} from "../../utils/links";
import { body } from "../../fixtures/testdata";
import { faker } from "@faker-js/faker";
describe("Account API Tests", { tags: ["APIs"] }, () => {
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

    //   it("get user details by email", () => {
    //     const userEmail = new URLSearchParams();
    //     userEmail.append("email", body.get("email"));
    //     cy.request({
    //       url: getUserDetailByEmailEndPoint,
    //       method: "GET",
    //       body: Object.fromEntries(userEmail),
    //       headers: {
    //         "Content-Type": "application/x-www-form-urlencoded",
    //       },
    //     }).then((response) => {
    //       expect(response.status).to.equal(200); //* This should be 201 instead of 200
    //       expect(response.body).to.contain("User Detail");
    //     });
    //   });
    // });

    context("PUT METHOD To Update User Account", () => {
      it("update user Account", () => {
        body.append("title", faker.word.noun());
        cy.request({
          url: updateAccountEndPoint,
          method: "PUT",
          body: Object.fromEntries(body),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }).then((response) => {
          expect(response.status).to.equal(200); //* This should be 201 instead of 200
          expect(response.body).to.contain("User updated!");
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
  });
});
