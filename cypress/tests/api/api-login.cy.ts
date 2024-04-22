import { loginEndPoint } from "../../utils/links";

describe("Login API", () => {
  context("Login Happy Path", () => {
    const body = new URLSearchParams();
    body.append("email", "moaaz@qa.team");
    body.append("password", "123456");
    it("should login successfully", () => {
      cy.request({
        url: `${loginEndPoint}`,
        method: "POST",
        body: Object.fromEntries(body),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((response) => {
        expect(response.status).to.equal(200).equal(200);
        expect(response.body).to.contains("User exists!");
      });
    });
  });
});
