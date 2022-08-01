import "cypress-keycloak";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.overwrite("login", (originalFn) => {
  originalFn({
    root: Cypress.env().KEYCLOAK_URL,
    realm: Cypress.env().KEYCLOAK_REALM,
    username: "student_fgpe",
    password: "student123",
    client_id: Cypress.env().KEYCLOAK_CLIENT_ID,
    redirect_uri: Cypress.env().KEYCLOAK_REDIRECT_URI,
  });
});
