# Simple Dockerfile example for Cypress
FROM cypress/included:latest

WORKDIR /app
COPY . .
RUN npm install

# Default command for Cypress
CMD ["npx", "cypress", "run"]
