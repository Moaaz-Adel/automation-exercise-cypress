class SignInPage {
  Selectors = {
    signUpLoginBtn: () => cy.get('[href="/login"]'),
  };

  singIn() {
    cy.visit("https://www.automationexercise.com/");
    this.Selectors.signUpLoginBtn().click();
    //   this.Selectors.userEmailTxt().type(emailAddress);
    //   this.Selectors.signUpBtn().click();
  }
  /* The commented out code block is defining a `login` method within the `SignInPage` class in
TypeScript. This method takes two parameters, `emailAddress` and `password`, both of type string.
Inside the method, it is expected to interact with elements on the page using the `Selectors`
defined in the class. Specifically, it is supposed to type the `emailAddress` into an email input
field, type the `password` into a password input field, and then click on a login button to submit
the form. */

  //   login(emailAddress: string, password: string) {
  //     this.Selectors.emailAddressTxt().type(emailAddress);
  //     this.Selectors.passwordTxt().type(password);
  //     this.Selectors.loginBtn().click();
  //   }
}

export const singInPage = new SignInPage();
