import { faker } from "@faker-js/faker";

export const generateUserData = () => {
  return {
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
};

export const body = new URLSearchParams();
body.append("name", faker.name.firstName());
body.append("email", faker.internet.email());
body.append("password", faker.internet.password());
body.append("title", faker.random.word());
body.append("birth_date", faker.date.past().toISOString());
body.append("birth_month", faker.date.month());
body.append("birth_year", faker.date.past().getFullYear().toString());
body.append("firstname", faker.name.firstName());
body.append("lastname", faker.name.lastName());
body.append("company", faker.random.words(2));
body.append("address1", faker.address.streetAddress());
body.append("address2", faker.address.streetName());
body.append("country", faker.address.country());
body.append("zipcode", faker.address.zipCode());
body.append("state", faker.address.state());
body.append("city", faker.address.city());
body.append("mobile_number", faker.phone.phoneNumber());
