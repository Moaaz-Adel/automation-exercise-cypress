import { faker } from "@faker-js/faker";

let productEndPoint = `${Cypress.env("apiUrl")}/productsList`;

describe("Product endpoint", () => {
  context("API 1: Get All Products List", () => {
    it("should get all products", () => {
      cy.request({
        method: "GET",
        url: productEndPoint,
      }).then((resp) => {
        expect(resp.status).to.eq(200);
      });
    });
  });
});
