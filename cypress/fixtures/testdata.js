import { faker } from "@faker-js/faker";

export const userInfo = {
  title: "mr",
  name: faker.name.firstName(),
  email: faker.internet.email(),
  password: "Hello@123456",
  birth_date: "10",
  birth_month: "11",
  birth_year: "2008",
  newsletter: 1,
  optin: 1,
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  company: faker.random.words(2),
  address1: faker.address.streetAddress(),
  address2: faker.address.state(),
  country: "Canada",
  state: faker.address.streetName(),
  city: faker.address.city(),
  zipcode: faker.address.zipCode(),
  mobile_number: "mr",
};
