import { productEndPoint } from "../../utils/links";
describe("Product endpoint", () => {
  context("API 1: Get All Products List", () => {
    it("should get all products", () => {
      cy.api({
        method: "GET",
        url: productEndPoint,
      }).then((resp) => {
        expect(resp.status).to.eq(200);
      });
    });
  });

  context("API 2: POST To All Products List", () => {
    it("should handle the unsupported method when trying to create new product", () => {
      cy.api({
        method: "POST",
        url: productEndPoint,
      }).then((resp) => {
        console.log(typeof resp.body);
        expect(JSON.parse(resp.body)).to.have.property("responseCode", 405);
        expect(JSON.parse(resp.body)).to.have.property(
          "message",
          "This request method is not supported."
        );
      });
    });
  });
});
