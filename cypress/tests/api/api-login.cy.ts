import { loginProductEndPoint } from "../../utils/links";

describe("Login API", () => {
  context("Login Happy Path", () => {
    it("should login successfully", () => {
      cy.request({
        url: `${loginProductEndPoint}`,
        method: "POST",
        qs: {
          email: "moaaz@qa.team",
          password: "123456",
        },
      });
    });
  });
});
