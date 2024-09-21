class ContactUsPage {
  Selectors = {
    contactUsHeaderTxt: () => cy.get("h2.title.text-center"),
    nameTxt: () => cy.get("[data-qa='name']"),
    emailTxt: () => cy.get("[data-qa='email']"),
    subjectTxt: () => cy.get("[data-qa='subject']"),
    messageTxt: () => cy.get("[data-qa='message']"),
    uploadFileBtn: () => cy.get("[name='upload_file']"),
    submitBtn: () => cy.get("[data-qa='submit-button']"),
    homePageBtn: () => cy.get("#form-section > .btn"),
    successMessage: () =>
      cy.contains("Success! Your details have been submitted successfully."),
  };

  fillFormData(
    name: string,
    email: string,
    subject: string,
    message: string
  ): void {
    this.Selectors.nameTxt().type(name);
    this.Selectors.emailTxt().type(email);
    this.Selectors.subjectTxt().type(subject);
    this.Selectors.messageTxt().type(message);
    this.Selectors.uploadFileBtn().selectFile(
      "cypress/fixtures/test-file.json"
    );
    this.Selectors.submitBtn().click();
  }

  verifySuccessMessage() {
    this.Selectors.successMessage().should("be.visible");
  }

  navigateToHomePage() {
    this.Selectors.homePageBtn().click();
  }
}

export const contactUsPage = new ContactUsPage();
