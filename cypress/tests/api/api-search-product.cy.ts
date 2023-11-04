import { searchProductEndPoint } from "../../utils/links";
describe("Product endpoint", () => {
  context("Search Products Happy Path", () => {
    it("should get the matched search query keyword", () => {
      cy.request({
        method: "POST",
        url: searchProductEndPoint,
        qs: {
          search_product: 123,
        },
      }).then((resp) => {
        expect(resp.status).to.eq(200);
        console.log(resp.body);
      });
    });
  });

  context("Search Products Negative Scenarios", () => {
    it("should responds with 400 Bad Request when 'search_product parameter is missing'", () => {
      cy.request({
        method: "POST",
        url: searchProductEndPoint,
      }).then((resp) => {
        expect(JSON.parse(resp.body).responseCode).to.eq(400);
      });
    });
  });
});
