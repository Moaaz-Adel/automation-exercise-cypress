import { searchProductEndPoint } from "@support/links";
import { StatusCodes, Messages } from "@support/constants";
describe("Product endpoint", { tags: ["APIs"] }, () => {
  context("Search Products Happy Path", () => {
    it("should get the matched search query keyword", () => {
      cy.request({
        method: "POST",
        url: searchProductEndPoint,
        qs: {
          search_product: 123,
        },
      }).then((resp) => {
        expect(resp.status).to.eq(StatusCodes.SUCCESS);
      });
    });
  });

  context("Search Products Negative Scenarios", () => {
    it("should responds with 400 Bad Request when 'search_product parameter is missing'", () => {
      cy.request({
        method: "POST",
        url: searchProductEndPoint,
      }).then((resp) => {
        expect(JSON.parse(resp.body).responseCode).to.eq(
          StatusCodes.BAD_REQUEST
        );
      });
    });
  });
});
