export const apiUrl = Cypress.env("apiUrl");

// API Endpoints
export const productEndPoint = `${apiUrl}/productsList`;
export const brandsEndPoint = `${apiUrl}/brandsList`;
export const searchProductEndPoint = `${apiUrl}/searchProduct`;
export const loginEndPoint = `${apiUrl}/verifyLogin`;
export const accountEndPoint = `${apiUrl}/createAccount`;
export const deleteAccountEndPoint = `${apiUrl}/deleteAccount`;
export const updateAccountEndPoint = `${apiUrl}/updateAccount`;
export const getUserDetailByEmailEndPoint = `${apiUrl}/getUserDetailByEmail`;
