import { brandsEndPoint } from "../../utils/links";
describe("Brands API Tests", () => {
  context("Happy Paths on Brands APIs", () => {
    it("should list all existing brands", () => {
      cy.api({
        method: "GET",
        url: brandsEndPoint,
      }).then((resp) => {
        expect(resp.status).to.eq(200);
      });
    });
  });

  context("Negative Scenarios on Brands APIs", () => {
    it("should handle the unsupported methods", () => {
      cy.api({
        method: "POST",
        url: brandsEndPoint,
      }).then((resp) => {
        expect(JSON.parse(resp.body)).to.have.property("responseCode", 405);
      });
    });
  });
});
