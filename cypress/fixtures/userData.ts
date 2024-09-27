import { faker } from "@faker-js/faker";

export const generateUserData = () => ({
  userName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  address: faker.address.streetAddress(),
  address2: faker.address.state(),
  state: faker.address.streetName(),
  city: faker.address.city(),
  mobileNumber: faker.phone.phoneNumber(),
  zipCode: faker.address.zipCode(),
  userEmail: faker.internet.email(),
  company: faker.random.words(2),
});

export const generateContactUsData = () => ({
  name: faker.name.firstName(),
  email: faker.internet.email(),
  subject: faker.random.words(2),
  message: faker.random.words(6),
});
