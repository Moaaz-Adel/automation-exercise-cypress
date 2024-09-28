import { faker } from "@faker-js/faker";

// Function to create form-urlencoded body
export const createFormUrlEncodedBody = (data: any) => {
  return Object.fromEntries(data);
};

// Function to get headers for form submission
export const formUrlEncodedHeaders = {
  "Content-Type": "application/x-www-form-urlencoded",
};

// Function to generate a new user body
export const generateUserBody = (existingBody: any) => {
  const newBody = new Map(existingBody);
  newBody.set("title", faker.word.noun());
  return newBody;
};
