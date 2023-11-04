export const apiUrl = Cypress.env("apiUrl");

// APIs Endpoints
export const productEndPoint = `${apiUrl}/productsList`;
export const brandsEndPoint = `${apiUrl}/brandsList`;
export const searchProductEndPoint = `${apiUrl}/searchProduct`;
export const loginProductEndPoint = `${apiUrl}/verifyLogin`;
