import {
  deleteAccountEndPoint,
  updateAccountEndPoint,
  accountEndPoint,
} from "@support/links";
import { body } from "@fixtures/testdata";
import { faker } from "@faker-js/faker";
import {
  createFormUrlEncodedBody,
  formUrlEncodedHeaders,
  generateUserBody,
} from "@support/apiHelpers";
import { StatusCodes, Messages } from "@support/constants";

describe("Account API Tests", { tags: ["APIs", "FULL"] }, () => {
  before(() => {
    cy.saveLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  context("Create/Register user account", () => {
    it.only("create/register new User Account", () => {
      cy.request({
        url: accountEndPoint,
        method: "POST",
        body: createFormUrlEncodedBody(body),
        headers: formUrlEncodedHeaders,
      }).then((response) => {
        expect(response.status).to.equal(StatusCodes.SUCCESS); //* This should be 201 instead of 200
        expect(response.body).to.contain(Messages.USER_CREATED);
      });
    });

    context("PUT METHOD To Update User Account", () => {
      it("update user Account", () => {
        body.append("title", faker.word.noun());
        cy.request({
          url: updateAccountEndPoint,
          method: "PUT",
          body: createFormUrlEncodedBody(body),
          headers: formUrlEncodedHeaders,
        }).then((response) => {
          expect(response.status).to.equal(StatusCodes.SUCCESS); //* This should be 201 instead of 200
          expect(response.body).to.contain(Messages.USER_UPDATED);
        });
      });
    });

    context("DELETE METHOD To Delete User Account", () => {
      it("delete user Account", () => {
        const userDetails = new URLSearchParams();
        userDetails.append("email", body.get("email") ?? "");
        userDetails.append("password", body.get("password") ?? "");
        cy.request({
          url: deleteAccountEndPoint,
          method: "DELETE",
          body: Object.fromEntries(userDetails),
          headers: formUrlEncodedHeaders,
        }).then((response) => {
          expect(response.status).to.equal(StatusCodes.SUCCESS); //* This should be 201 instead of 200
          expect(response.body).to.contain(Messages.ACCOUNT_DELETED);
        });
      });
    });
  });
});
