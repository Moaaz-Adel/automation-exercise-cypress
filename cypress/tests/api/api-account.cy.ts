import { accountEndPoint } from "./../../utils/links";
import { body } from "../../fixtures/testdata";
describe("Account API Tests", () => {
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
