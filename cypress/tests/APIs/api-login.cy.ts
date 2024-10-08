import { loginEndPoint } from "@support/links";
import { body } from "@fixtures/testdata";
import { StatusCodes, Messages } from "@support/constants";
import { formUrlEncodedHeaders } from "@support/apiHelpers";
describe("Login API", { tags: ["APIs", "FULL"] }, () => {
  context("Login Happy Path", () => {
    it("verify Login with valid details", () => {
      body.append("email", "moaaz@qa.team");
      body.append("password", "123456");
      cy.request({
        url: `${loginEndPoint}`,
        method: "POST",
        body: Object.fromEntries(body),
        headers: formUrlEncodedHeaders,
      }).then((response) => {
        expect(response.status).to.equal(StatusCodes.SUCCESS);
        expect(response.body).to.contains("User exists!");
      });
    });
  });

  context("Login Negative Scenarios", () => {
    it("verify Login without email parameter", () => {
      body.delete("email");
      cy.request({
        url: `${loginEndPoint}`,
        method: "POST",
        body: Object.fromEntries(body),
        headers: formUrlEncodedHeaders,
      }).then((response) => {
        expect(response.status).to.equal(StatusCodes.SUCCESS);
        expect(response.body).to.contains(
          "Bad request, email or password parameter is missing in POST request."
        );
      });
    });
    it("try using DELETE method", () => {
      cy.request({
        url: `${loginEndPoint}`,
        method: "DELETE",
        body: Object.fromEntries(body),
        headers: formUrlEncodedHeaders,
      }).then((response) => {
        expect(response.status).to.equal(StatusCodes.SUCCESS); //! This is NOT valid Response Code, should be 405
        expect(response.body).to.contains(
          "This request method is not supported."
        );
      });
    });

    it("verify Login with invalid details", () => {
      body.append("email", "not-existing-User@test.com");
      body.append("password", "Invalid Pass");
      cy.request({
        url: `${loginEndPoint}`,
        method: "POST",
        body: Object.fromEntries(body),
        headers: formUrlEncodedHeaders,
      }).then((response) => {
        expect(response.status).to.equal(StatusCodes.SUCCESS); //! This is NOT valid Response Code, should be 404
        expect(response.body).to.contains(Messages.USER_NOT_FOUND);
      });
    });
  });
});
