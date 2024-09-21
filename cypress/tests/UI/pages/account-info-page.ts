import { getRandomInt } from "../../../utils/common-functions";

class AccountInfoPage {
  Selectors = {
    accountInfoHeader: () => cy.contains("b", "Enter Account Information"),
    titleMaleRdo: () => cy.get("#id_gender1"),
    titleFemaleRdo: () => cy.get("#id_gender2"),
    passwordTxt: () => cy.get("[data-qa='password']"),
    daysDdl: () => cy.get("[data-qa='days']"),
    dayOptionsDdl: () => cy.get("[data-qa='days'] > option"),
    monthsDdl: () => cy.get("[data-qa='months']"),
    monthOptionsDdl: () => cy.get("[data-qa='months'] > option"),
    yearsDdl: () => cy.get("[data-qa='years']"),
    yearOptionsDdl: () => cy.get("[data-qa='years'] > option"),
    newsLetterChk: () => cy.get("#newsletter"),
    specialOfferChk: () => cy.get("#optin"),
    companyTxt: () => cy.get("[data-qa='company']"),
    firstNameTxt: () => cy.get("[data-qa='first_name']"),
    lastNameTxt: () => cy.get("[data-qa='last_name']"),
    addressTxt: () => cy.get("[data-qa='address']"),
    address2Txt: () => cy.get("[data-qa='address2']"),
    countryOptionsDdl: () => cy.get("[data-qa='country'] > option"),
    countryDdl: () => cy.get("[data-qa='country']"),
    stateTxt: () => cy.get("[data-qa='state']"),
    cityTxt: () => cy.get("[data-qa='city']"),
    zipCodeTxt: () => cy.get("[data-qa='zipcode']"),
    mobileNumberTxt: () => cy.get("[data-qa='mobile_number']"),
    createAccountBtn: () => cy.get("[data-qa='create-account']"),
  };

  registerNewUser(
    title,
    password,
    newsLetter,
    specialOffer,
    company,
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zipCode,
    mobileNumber
  ) {
    if (title == 1) {
      this.Selectors.titleMaleRdo().check();
    } else {
      this.Selectors.titleFemaleRdo().check();
    }
    this.Selectors.passwordTxt().type(password);
    this.Selectors.dayOptionsDdl().then((listing) => {
      const randomNumber = getRandomInt(0, listing.length - 1);
      this.Selectors.dayOptionsDdl()
        .eq(randomNumber)
        .then(($select) => {
          //choose a random Day
          const text = $select.text(); //get the option's text. For ex. "A"
          this.Selectors.daysDdl().select(text); // select the option on UI
        });
    });
    this.Selectors.monthOptionsDdl().then((listing) => {
      const randomNumber = getRandomInt(0, listing.length - 1);
      this.Selectors.monthOptionsDdl()
        .eq(randomNumber)
        .then(($select) => {
          //choose a random Month
          const text = $select.text(); //get the option's text. For ex. "A"
          this.Selectors.monthsDdl().select(text); // select the option on UI
        });
    });
    this.Selectors.yearOptionsDdl().then((listing) => {
      const randomNumber = getRandomInt(0, listing.length - 1);
      this.Selectors.yearOptionsDdl()
        .eq(randomNumber)
        .then(($select) => {
          //choose a random Year
          const text = $select.text(); //get the option's text. For ex. "A"
          this.Selectors.yearsDdl().select(text); // select the option on UI
        });
    });
    if (newsLetter == 1) {
      this.Selectors.newsLetterChk().check();
    }
    if (specialOffer == 1) {
      this.Selectors.specialOfferChk().check();
    }
    this.Selectors.companyTxt().type(company);
    this.Selectors.firstNameTxt().type(firstName);
    this.Selectors.lastNameTxt().type(lastName);
    this.Selectors.addressTxt().type(address1);
    this.Selectors.address2Txt().type(address2);
    this.Selectors.countryOptionsDdl().then((listing) => {
      const randomNumber = getRandomInt(0, listing.length - 1);
      this.Selectors.countryOptionsDdl()
        .eq(randomNumber)
        .then(($select) => {
          //choose a random Year
          const text = $select.text(); //get the option's text. For ex. "A"
          this.Selectors.countryDdl().select(text); // select the option on UI
        });
    });
    this.Selectors.stateTxt().type(state);
    this.Selectors.cityTxt().type(city);
    this.Selectors.zipCodeTxt().type(zipCode);
    this.Selectors.mobileNumberTxt().type(mobileNumber);
    this.Selectors.createAccountBtn().click();
  }
}

export const accountInfoPage = new AccountInfoPage();
